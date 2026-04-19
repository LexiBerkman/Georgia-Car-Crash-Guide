import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Why Social Media Can Be Fatal to Your Personal Injury Case',
  description: 'How insurance adjusters and defense attorneys weaponize your social media posts against you — and what to do before it destroys your claim.',
  openGraph: {
    title: 'Why Social Media Can Be Fatal to Your PI Case',
    description: 'How insurance adjusters and defense attorneys weaponize your social media posts against you.',
    url: 'https://www.georgiacarcrashguide.com/resources/social-media-fatal-to-pi-case',
  },
};

export default function SocialMediaPICase() {
  return (
    <main className="container">
      <article className="article-content">
        <p className="eyebrow">Evidence & Discovery</p>
        <h1>Why Social Media Can Be Fatal to Your Personal Injury Case</h1>

        <figure className="article-hero">
          <Image
            src="/social-media-fatal.jpg"
            alt="Shattered smartphone screen with social media fragments and a courtroom silhouette"
            width={1200}
            height={675}
            priority
          />
          <figcaption>Every post is evidence. Defense teams know it before you do.</figcaption>
        </figure>

        <p className="lead">
          Your personal injury claim is built on one thing above all else: credibility. If a jury or an adjuster stops believing you, the case dies. Social media is the most efficient way to destroy your own credibility — and most claimants do it without knowing the damage is already done.
        </p>

        <h2>The Defense Does Not Guess — They Hunt</h2>
        <p>
          Insurance defense teams do not wait for trial to look at your social media. The moment you file a claim, they assign someone to build a timeline of every public post, every tagged photo, every check-in. This is standard practice. It is not invasive. It is not illegal. It is their job.
        </p>
        <p>
          Defense attorneys have specific language they train adjusters to use: <em>"plaintiff's social media is inconsistent with claimed injuries."</em> That phrase alone can drop a six-figure demand to a nuisance-value offer.
        </p>

        <h2>What They Look For</h2>
        <ul>
          <li><strong>Activities that contradict your injury narrative.</strong> A hiker who claimed a broken back but posted a hiking photo from two months ago. A back-injury claimant who was photographed moving furniture the week before trial.</li>
          <li><strong>Geographic evidence of mobility.</strong> Check-ins at locations, timestamps, and photos that place you places inconsistent with your claimed limitations.</li>
          <li><strong>Income and lifestyle evidence.</strong> Posts that suggest you're earning more than you've claimed, or living a lifestyle that contradicts your economic loss calculations.</li>
          <li><strong>Character evidence.</strong> Anything that paints you as less credible, less sympathetic, or less injured than your testimony suggests.</li>
        </ul>

        <h2>The Smoking Gun That Wasn't a Gun</h2>
        <p>
          We had a client — serious rear-end collision, clear liability, documented cervical injuries — whose case nearly collapsed over a single photograph. The photo showed him at a friend's barbecue, holding a beer, smiling. To a jury, this looked like someone who wasn't hurt.
        </p>
        <p>
          The reality: the photo was taken four months after the collision, on a day his doctor had explicitly cleared him for light activity. He wasn't injured that day. But the photo didn't show the months of physical therapy it took to get there. It only showed a man with a beer.
        </p>
        <p>
          The case settled. But the defendant never stopped using that photo in negotiations. The defense understood exactly how to frame it. Your social media presence is a puzzle they will assemble without you.
        </p>

        <h2>The Rules Have Changed</h2>
        <p>
          A decade ago, "private" social media accounts offered meaningful protection. Courts are now routinely ordering plaintiffs to produce social media credentials, authorize access to accounts, and submit to exams where opposing counsel can ask about online activity. Privateness is not a shield.
        </p>
        <p>
          In Georgia, courts have permitted discovery requests for social media content when it is reasonably calculated to lead to discoverable evidence. The standard is low. The exposure is high.
        </p>

        <h2>What You Should Do Right Now</h2>
        <ol>
          <li>
            <strong>Assume every post is evidence.</strong> Before you post anything related to physical activity, travel, work, or recreation, ask yourself how the defense would frame this image in front of a jury.
          </li>
          <li>
            <strong>Go dark on physical claims content.</strong> Not all social media — but anything that shows you engaging in activities that a defense attorney could point to as inconsistent with your injuries. Birthday parties, yard work, sports, travel. Wait until the case resolves.
          </li>
          <li>
            <strong>Audit your existing posts.</strong> Have a trusted person review your public profile with fresh eyes. Remove anything that could be taken out of context or misrepresented.
          </li>
          <li>
            <strong>Tell your family the same rules apply.</strong> Defense teams look at claimant social media, but they also look at posts from family members who may have tagged you or posted photos of you.
          </li>
          <li>
            <strong>Stop posting about your injury entirely until your case resolves.</strong> Anything you say publicly — in a post, a comment, a story — becomes a data point in a larger campaign to discredit your claim. This applies to comments on other people's posts, group participation, and anything that references physical condition, recovery progress, or daily activities.
          </li>
        </ol>

        <h2>The Bottom Line</h2>
        <p>
          Social media is not your friend in a personal injury case. It is a permanent, searchable, timestamped record that defense teams are legally empowered to use against you. The claim that dies in discovery because of an ill-timed Instagram post is a claim that should have been worth real money.
        </p>
        <p>
          If you have already posted and you are worried about what is out there — the situation is manageable. The first step is understanding what is publicly accessible and how a defense team might frame it. A Georgia attorney can give you a candid assessment of your exposure before you say anything that makes the situation worse.
        </p>

        <div className="disclaimer-box">
          <p><strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. This site does not create an attorney-client relationship.</p>
        </div>
      </article>
    </main>
  );
}
