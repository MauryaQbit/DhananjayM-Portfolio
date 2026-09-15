import { ProseH2, ProseH3, ProseList, ProseP, SourcesBox } from "./Prose";

export default function EdgeArticle() {
  return (
    <div className="mt-4">
      <ProseP>
        When I started this little research dive into Microsoft Edge, I&apos;ll
        be honest — I went in with the usual bias most of us carry. Edge was
        &ldquo;that browser you use to download Chrome.&rdquo; For years that
        joke basically wrote itself. But spending some time actually reading
        through Edge&apos;s release notes, feature pages, and a bunch of 2026
        reviews, I realized the browser has quietly become something a lot more
        serious than the meme suggests. This post is my attempt to break down
        where Edge actually stands right now, as of late 2026, and whether
        it&apos;s worth taking seriously as a daily driver.
      </ProseP>

      <ProseH2>A Quick Recap: Why Edge Even Matters</ProseH2>
      <ProseP>
        Edge stopped being Microsoft&apos;s old EdgeHTML-based browser back in
        2015 and got rebuilt on Chromium, Google&apos;s open-source engine. That
        one decision changed everything for Edge — it meant instant compatibility
        with the extensions and websites built for Chrome, without Microsoft
        having to fight the &ldquo;this site doesn&apos;t support your
        browser&rdquo; battle on its own. Since then, Edge has basically been
        playing catch-up and then differentiation: same core engine as Chrome,
        but a different set of features layered on top.
      </ProseP>

      <ProseH2>What&apos;s Actually New in 2026</ProseH2>

      <ProseH3>Copilot Is Everywhere Now (For Better or Worse)</ProseH3>
      <ProseP>
        The biggest shift this year is that Microsoft folded its separate
        &ldquo;Copilot Mode&rdquo; directly into the regular browser experience
        instead of keeping it as an opt-in mode. As of a May 2026 update,
        Copilot capabilities are just built into Edge on both desktop and mobile
        — no toggle required. What&apos;s more interesting from a research
        standpoint is that Copilot can now reason across multiple open tabs at
        once, meaning it can compare information between pages, pull out
        relevant details, and give answers grounded in what you&apos;re actually
        browsing, not just a single page.
      </ProseP>
      <ProseP>
        Microsoft has been fairly upfront that Copilot&apos;s data handling is
        opt-in for personalization — it only uses browsing context you&apos;ve
        chosen to share via personalization settings, and the company has
        repeatedly stated this data isn&apos;t shared without permission.
        Whether that satisfies privacy-conscious users is a separate debate, but
        at least the framing is there.
      </ProseP>

      <ProseH3>Edge Is Getting Leaner, Not Just Smarter</ProseH3>
      <ProseP>
        What surprised me most is that 2026 hasn&apos;t just been about adding
        AI features — Microsoft has actually been cutting things. Reports from
        mid-2026 describe Edge &ldquo;trimming the clutter,&rdquo; removing
        outdated features and simplifying an interface that had gotten a bit
        bloated over the years. A concrete example: Drop, the feature that let
        you send files, notes, and links between your own devices, is being
        phased out, with file-sharing folded into OneDrive instead.
      </ProseP>
      <ProseP>
        This matters for anyone studying UX design trends — it&apos;s a sign
        that even AI-forward products are recognizing that stacking on features
        endlessly isn&apos;t sustainable, and that occasionally you need to
        simplify rather than expand.
      </ProseP>

      <ProseH3>Security and Enterprise Changes</ProseH3>
      <ProseP>
        On the enterprise side, Edge is moving away from some of its older
        Windows-10-era protections like Windows Information Protection (WIP) and
        Microsoft Defender Application Guard (MDAG), pushing organizations
        toward newer tools like Microsoft Purview and Intune app protection
        policies instead. Edge also natively supports hardware isolation now, so
        a lot of what MDAG used to do is baked into the browser itself. For
        general users, Edge continues to lean on Defender SmartScreen, Enhanced
        Security Mode, and typo-protection for spoofed websites.
      </ProseP>
      <ProseP>
        There&apos;s also a smaller but genuinely useful addition: passkey sync
        for enterprise users, letting passwordless credentials sync securely
        across devices — something that&apos;s becoming a baseline expectation
        for browsers in 2026 rather than a nice-to-have.
      </ProseP>

      <ProseH2>The Productivity Layer — A Closer Look</ProseH2>
      <ProseP>
        Beyond the AI headline features, Edge still leans hard into its
        &ldquo;browser as a workspace&rdquo; identity. Here&apos;s where I went
        deeper into each one, since these are the features people actually touch
        every day:
      </ProseP>

      <ProseH3>Vertical tabs and tab groups</ProseH3>
      <ProseP>
        Vertical tabs move your open tabs from the top bar to a sidebar on the
        left, which sounds like a small change but makes a real difference once
        tab titles get long — you can actually read &ldquo;Chapter 4 - Research
        Methodology&rdquo; instead of a truncated sliver of text. Tab groups let
        you bundle related pages under a custom label and color, like
        &ldquo;Research,&rdquo; &ldquo;Invoices,&rdquo; or &ldquo;Client
        Review,&rdquo; so a cluttered bar of 25 tabs turns into three or four
        labeled clusters you can collapse and expand. The catch: tab groups get
        deleted once you close Edge entirely, unless you save them into
        Collections first — a limitation that trips a lot of people up.
      </ProseP>

      <ProseH3>Sleeping tabs</ProseH3>
      <ProseP>
        When a tab hasn&apos;t been touched for a while, Edge quietly puts it
        into a resting state, freeing up the memory and CPU it was consuming,
        and reactivates it instantly when you click back on it. For anyone
        running a dashboard, a document, email, and ten research tabs
        simultaneously, this is less about convenience and more about keeping
        your laptop fan from sounding like a jet engine during a video call.
      </ProseP>

      <ProseH3>Collections</ProseH3>
      <ProseP>
        This is genuinely one of Edge&apos;s most underrated features. It works
        like a research vault — you can save entire web pages, individual links,
        screenshots, and highlighted text snippets into named folders just by
        right-clicking and selecting &ldquo;Add to Collections.&rdquo; Planning
        a trip, studying for an exam, or compiling competitor research for a
        project all become far more organized this way, since you&apos;re not
        relying on a messy bookmarks bar or fifty open tabs to remember what you
        found.
      </ProseP>

      <ProseH3>Immersive Reader and Read Aloud</ProseH3>
      <ProseP>
        Immersive Reader strips a webpage down to just its text — no ads, no
        sidebars, no clutter — and lets you adjust font size, spacing, and even
        highlight parts of speech, which was originally built as an
        accessibility tool but is genuinely useful for anyone trying to focus on
        long-form reading. Read Aloud goes a step further and converts that same
        text into speech, so you can listen to an article while doing something
        else, which I found surprisingly good for getting through dense research
        papers during a commute.
      </ProseP>

      <ProseH3>Built-in shopping tools</ProseH3>
      <ProseP>
        Edge tracks price drops on products you&apos;re browsing, compares
        prices for the same item across different retailers automatically, and
        offers cashback on certain purchases — all without needing a separate
        browser extension. This is aimed squarely at everyday consumers rather
        than developers or students, but it&apos;s a good example of Microsoft
        trying to make Edge useful across very different user types in a single
        install.
      </ProseP>

      <ProseH3>Copilot sidebar (separate from the tab-reasoning feature above)</ProseH3>
      <ProseP>
        Beyond comparing across tabs, the Copilot sidebar itself sits docked on
        the right side of the browser and can summarize whatever long article
        you&apos;re currently reading, draft an email from scratch, explain a
        complex topic in simpler terms, or help you go from a rough idea to a
        structured starting point — all without switching to a separate app or
        tab. The pitch from Microsoft is reducing the number of times you break
        your flow to go &ldquo;check something in another tool.&rdquo;
      </ProseP>

      <ProseH2>Where It Still Falls Short</ProseH2>
      <ProseP>
        It wouldn&apos;t be honest research if I only listed the positives. A
        few things stood out as genuine limitations:
      </ProseP>
      <ProseList
        items={[
          "Feature fatigue and confusion. Some testers have noted inconsistencies — like tab groups behaving differently depending on testing location — which suggests the feature set, while broad, isn't always polished evenly across the board.",
          "AI-by-default concerns. Folding Copilot into the base browser experience (rather than keeping it opt-in) will bother users who specifically wanted an AI-free browsing option. Microsoft says it's off by default for the sensitive parts, but the ambient presence of Copilot is now just part of using Edge.",
          "Still fundamentally Chromium. For all its added features, Edge's core rendering engine is the same as Chrome's. That's a strength for compatibility but means Edge is differentiating almost entirely on the “shell” around the engine, not the engine itself.",
        ]}
      />

      <ProseH2>My Takeaway</ProseH2>
      <ProseP>
        Coming from a computer science student&apos;s perspective, what stands
        out most about Edge in 2026 isn&apos;t any single feature — it&apos;s
        the direction. Microsoft seems to be positioning Edge less as &ldquo;a
        way to browse the web&rdquo; and more as &ldquo;a way to get work done
        on the web,&rdquo; with Copilot doing a lot of the heavy lifting for
        summarizing, comparing, and drafting. Whether that&apos;s genuinely
        useful or just AI-washing depends a lot on how well Copilot performs in
        practice, which is honestly worth a follow-up study of its own.
      </ProseP>
      <ProseP>
        For now, my conclusion is this: Edge has moved well past its
        &ldquo;just use Chrome&rdquo; reputation. It&apos;s not going to win
        everyone over, especially privacy purists or people who dislike AI
        defaults, but as a research and productivity tool, it&apos;s become
        genuinely competitive — and that&apos;s not something I expected to be
        writing a year ago.
      </ProseP>

      <SourcesBox>
        Microsoft Edge release notes (Microsoft Learn), Microsoft Edge Blog,
        Thurrott.com, Cloudwards, and Network Services Group&apos;s 2026 Edge
        feature roundup.
      </SourcesBox>
    </div>
  );
}
