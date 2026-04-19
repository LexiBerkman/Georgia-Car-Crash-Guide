import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

function buildPrompt(data: Record<string, unknown>): string {
  const {
    claimantName, claimantAddress, claimantCity, claimantState, claimantZip,
    claimantPhone, claimantEmail,
    accidentDate, accidentTime, accidentLocation, accidentDescription,
    policeReportNumber, policeDepartment,
    otherDriverName, otherDriverInsurance, otherDriverPolicyNumber, otherDriverContact,
    erVisit, erFacility, erDate, erDiagnosis,
    followUpVisits, physicalTherapy, ptSessions,
    otherTreatment, mmiDate, ongoingRestrictions,
    medicalBillsTotal, lostWagesTotal, propertyDamageTotal, painAndSuffering,
    policyLimitsKnown, policyLimitsAmount, settlementDemand, expirationDays,
  } = data as Record<string, string>;

  const totalSpecial = (Number(medicalBillsTotal) || 0) + (Number(lostWagesTotal) || 0);
  const totalDamages = totalSpecial + (Number(propertyDamageTotal) || 0) + (Number(painAndSuffering) || 0);

  return `You are a legal document generator. Generate a complete, ready-to-send personal injury demand letter in Georgia. Use the exact structure and language below. Do not add any content the user has not provided. Do not add warnings or legal disclaimers inside the letter — those appear on the website, not in the letter itself.

Format the letter in plain text with standard business letter formatting. Include a blank line between paragraphs. Use the header format: your address on the left, date on the right. Then the adjuster's info, then the RE: line.

Return ONLY the letter text. No preamble, no explanation.

=== LETTER STRUCTURE ===

[Your Name]
[Your Address]
[City, State ZIP]
[Phone]
[Email]

[Date]

[Adjuster Name or "To Whom It May Concern"]
[Insurance Company Name]
[Company Address or "Claim Department"]

RE: DEMAND FOR SETTLEMENT — ${claimantName || '[Your Name]'} v. ${otherDriverName || '[At-Fault Driver]'}
Claim No.: ${otherDriverPolicyNumber || '[Policy Number]'}

Dear ${otherDriverContact ? otherDriverContact.split(',')[0] : 'Claims Adjuster'}:

=== STATEMENT OF FACTS ===
[2-3 sentence factual description of the accident. The claimant was lawfully stopped / proceeding lawfully when the at-fault driver negligently [description based on accident description provided: "${accidentDescription || '[description]'}"]. The accident occurred on ${accidentDate || '[date]'} at approximately ${accidentTime || '[time]'} at ${accidentLocation || '[location]'}.]

=== INJURIES AND MEDICAL TREATMENT ===
${erVisit === 'true' ? `Following the accident, I sought emergency medical treatment at ${erFacility || '[ER Facility]'} on ${erDate || '[date]'}, where I was diagnosed with ${erDiagnosis || '[diagnosis]'}.` : 'Following the accident, I sought medical treatment for injuries sustained.'}
${followUpVisits ? `I subsequently received ${followUpVisits}.` : ''}
${physicalTherapy === 'true' ? `I completed ${ptSessions || 'physical therapy'} for rehabilitation.` : ''}
${otherTreatment ? `Additional treatment included: ${otherTreatment}.` : ''}
${mmiDate ? `My treating physician has indicated I reached maximum medical improvement as of ${mmiDate}.` : ''}
${ongoingRestrictions ? `I continue to experience ongoing restrictions including: ${ongoingRestrictions}.` : ''}

=== SPECIAL DAMAGES ===
The following damages are documented and supported by attached exhibits:

Medical Expenses: $${Number(medicalBillsTotal).toLocaleString() || '0'} (see Exhibit A)
Lost Wages: $${Number(lostWagesTotal).toLocaleString() || '0'} (see Exhibit B)
Property Damage: $${Number(propertyDamageTotal).toLocaleString() || '0'} (see Exhibit C)

Total Special Damages: $${totalSpecial.toLocaleString()}

Pain and Suffering: $${Number(painAndSuffering).toLocaleString()}

=== TOTAL CLAIM VALUE ===
The total value of my claim is $${totalDamages.toLocaleString()}.

=== SETTLEMENT DEMAND ===
Based on the foregoing, I am demanding settlement of my claim in the amount of $${Number(settlementDemand).toLocaleString()}.
${policyLimitsKnown === 'true' ? `(This demand is within the applicable policy limits of $${Number(policyLimitsAmount).toLocaleString()}.)` : ''}
This demand is reasonable given the clear liability, the nature and extent of my injuries, and the resulting documented damages.

This demand will expire in ${expirationDays || '30'} days from the date of this letter.

=== CLOSING ===
I am prepared to provide any additional documentation required and remain available to discuss resolution of this claim. Please direct all correspondence to the address listed above.

If this matter is not resolved within ${expirationDays || '30'} days, I will consider filing a lawsuit in the appropriate Georgia court without further notice.

Sincerely,

${claimantName || '[Your Name]'}

Enclosures:
Exhibit A — Medical Records and Bills
Exhibit B — Lost Wages Documentation
Exhibit C — Property Damage Documentation
${policeReportNumber ? `Exhibit D — Police Report (${policeReportNumber})` : ''}
`;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'AI generation is not configured. Please add OPENAI_API_KEY to your environment variables.' },
        { status: 500 }
      );
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'AI generation is not configured. Please add your OpenAI API key to the environment variables.' },
        { status: 500 }
      );
    }

    const prompt = buildPrompt(data);

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a legal document generator specializing in Georgia personal injury claims. Generate professional, complete demand letters using the structure provided. Output only the letter text — no comments, no preambles, no meta-commentary.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.3,
      max_tokens: 2048,
    });

    const letter = completion.choices[0]?.message?.content?.trim();

    if (!letter) {
      return NextResponse.json({ error: 'Failed to generate letter.' }, { status: 500 });
    }

    return NextResponse.json({ letter });
  } catch (error) {
    console.error('Demand letter generation error:', error);
    return NextResponse.json(
      { error: 'An error occurred while generating the letter. Please try again.' },
      { status: 500 }
    );
  }
}
