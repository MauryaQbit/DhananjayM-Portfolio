import { ProseH2, ProseList, ProseP, SourcesBox } from "./Prose";

export default function AiToolsArticle() {
  return (
    <div className="mt-4">
      <ProseP>
        Okay so this year has been a lot. Between my Project LOOP internship
        (building a multi-tenant AI feedback platform) and the traffic
        forecasting ML internship, I&apos;ve had AI tools open in like four
        tabs at any given time, and at some point I stopped and thought — I
        should actually write down what I&apos;ve figured out about these,
        because half my classmates are still just using ChatGPT for everything
        and the other half think Cursor is the only thing that exists.
      </ProseP>
      <ProseP>
        So here&apos;s my attempt at an honest rundown of five free-ish AI tools
        that are actually relevant right now — OpenCode, Claude, Cursor, ZCode,
        and Sakana AI — what they&apos;re good for, and where I&apos;d tell you
        to be careful. Not sponsored, not a &ldquo;top 5 tools you
        NEED&rdquo; clickbait thing. Just what I found while poking around and
        reading way too many changelogs.
      </ProseP>

      <ProseH2>
        OpenCode — the one for people who don&apos;t mind the terminal
      </ProseH2>
      <ProseP>
        If you&apos;re broke (relatable) and don&apos;t want to pay for
        anything, OpenCode is honestly the strongest free option out there right
        now. It&apos;s fully open source, runs in your terminal (there&apos;s a
        desktop app too now if you&apos;re not a terminal person), and it comes
        with free models built in — no API key required to get started. You can
        also plug in your own key for Claude, GPT, Gemini, whatever, and switch
        between them whenever.
      </ProseP>
      <ProseP>
        It&apos;s genuinely capable — it reads your codebase, edits files across
        your project, runs your tests and linters, all that agentic stuff. The
        only downside is it&apos;s a bit more &ldquo;figure it out
        yourself&rdquo; than something like Cursor. If you&apos;ve never touched
        a CLI tool before, there&apos;s a small learning curve, but nothing a
        weekend won&apos;t fix.
      </ProseP>
      <ProseP>
        One thing to actually watch out for: since it supports bring-your-own-key
        setups, don&apos;t be that person who commits their API key to a public
        GitHub repo. I&apos;ve seen it happen. It&apos;s not fun to explain to
        your professor why your API bill is ₹40,000.
      </ProseP>

      <ProseH2>
        Claude — my go-to for basically everything that isn&apos;t just code
      </ProseH2>
      <ProseP>
        I&apos;ll be upfront, I use Claude the most out of all of these, mostly
        because I don&apos;t only need help with code — I need help writing
        internship reports, explaining ML concepts back to myself in simpler
        words, debugging stuff, and occasionally just thinking through an idea
        before I commit to it. Claude (made by Anthropic) works as a regular
        chat assistant, and there&apos;s also Claude Code for more hands-on
        coding work where it can actually go into your project and make changes.
      </ProseP>
      <ProseP>
        What I like about it is it doesn&apos;t feel like it&apos;s trying to
        just impress you with confidence — it&apos;ll actually tell you when
        something&apos;s uncertain, which honestly matters a lot when
        you&apos;re using it for anything that ends up in a report
        you&apos;re submitting. That said, don&apos;t take this as &ldquo;so
        it&apos;s always right.&rdquo; I&apos;ve had it get things wrong before,
        same as any tool. Always double check anything that matters, especially
        facts and numbers.
      </ProseP>

      <ProseH2>
        Cursor — the smoothest experience if you can eventually afford it
      </ProseH2>
      <ProseP>
        Cursor is basically VS Code but built from the ground up with AI baked
        in instead of bolted on as an extension. If you&apos;ve used
        Copilot&apos;s autocomplete and thought &ldquo;this is fine but I want
        more,&rdquo; Cursor is that &ldquo;more.&rdquo; It&apos;s got inline
        completions, a proper multi-file AI editor (Composer), and an Agent mode
        that can just go off and do multi-step tasks on its own.
      </ProseP>
      <ProseP>
        The free Hobby plan gives you enough to actually test it out — something
        like 2,000 completions and around 50 premium AI requests a month — which
        is enough to know whether you like it before you decide if the
        ₹1,700-ish/month Pro plan (~$20) is worth it for you. Personally I think
        it&apos;s the nicest tool to actually sit and code in, if the
        subscription fits your budget.
      </ProseP>
      <ProseP>
        Quick safety thing that actually matters if you&apos;re interning
        somewhere: Cursor sends your code to whichever model provider it&apos;s
        using to generate suggestions. There&apos;s a Privacy Mode you can turn
        on that stops your code from being used to train anything — if
        you&apos;re working on a company codebase during an internship,
        genuinely go check that setting is on. Don&apos;t just assume it is.
      </ProseP>

      <ProseH2>
        Sakana AI — not really a &ldquo;tool,&rdquo; more of a &ldquo;keep an
        eye on this&rdquo;
      </ProseH2>
      <ProseP>
        This one&apos;s different from the rest, and I want to be upfront that
        it&apos;s not something you&apos;ll install and use for your daily
        coding grind. Sakana AI is a Tokyo-based research lab, not really a
        product company in the way the others are. Their whole philosophy is
        kind of interesting though — instead of building one giant model,
        they&apos;re betting on combining a bunch of smaller specialized models
        that work together, like how a school of fish moves as one thing even
        though no single fish is in charge.
      </ProseP>
      <ProseP>
        Their product Fugu isn&apos;t a model at all really, it&apos;s more of
        an orchestrator — it looks at your task, decides which existing AI
        models should handle which part, and stitches the results into one
        answer.
      </ProseP>
      <ProseP>
        Honestly I only included this because if you&apos;re doing anything
        research-adjacent (a seminar, a paper, whatever), it&apos;s a genuinely
        good example to bring up of AI research going in a different direction
        than &ldquo;just make the model bigger.&rdquo; Just don&apos;t go
        throwing sensitive data at a newer research-stage product — it
        hasn&apos;t been battle-tested the way the bigger names have.
      </ProseP>

      <ProseH2>
        ZCode — free, powerful, and the one I&apos;d actually think twice about
      </ProseH2>
      <ProseP>
        ZCode is Z.ai&apos;s (formerly Zhipu AI) free desktop coding tool, built
        specifically around their GLM-5.2 model, though you can hook up Claude,
        GPT, or other models too if you want. It&apos;s marketed as an
        &ldquo;agentic development environment,&rdquo; meaning the whole thing
        is built around letting an AI agent take a goal and just run with it
        across multiple steps — plan, edit files, run checks, keep going until
        it&apos;s actually done, not just &ldquo;looks done.&rdquo;
      </ProseP>
      <ProseP>
        It&apos;s got a Goal Mode where you set an objective and it keeps
        iterating till it&apos;s verified complete, different autonomy levels
        you can toggle through, and it even supports controlling tasks remotely
        through WeChat or Feishu if that&apos;s your thing. Genuinely
        feature-rich for something that&apos;s free.
      </ProseP>
      <ProseP>
        Here&apos;s the part I&apos;d actually flag though — ZCode is developed
        by a Beijing-based company, and there&apos;s been some real industry
        discussion around the geopolitical angle of using developer tools built
        by companies in different regulatory environments, especially ones that
        get deep file-system and terminal access on your machine. I&apos;m not
        saying &ldquo;don&apos;t use it&rdquo; — for messing around on personal
        projects it&apos;s probably fine. But I would NOT be running it against
        anything from my internship or anything with client data in it. Same
        logic applies to any tool with that much access regardless of where
        it&apos;s from, but it&apos;s worth actually thinking about instead of
        just installing and forgetting.
      </ProseP>

      <ProseH2>The general safety stuff nobody really talks about</ProseH2>
      <ProseP>
        A few things I kept noticing while looking into all of these:
      </ProseP>
      <ProseList
        items={[
          "Your code and prompts usually go to a cloud model somewhere. If it's NDA'd internship work, check for a privacy/no-training setting before you paste anything in.",
          "Don't just trust AI-written code because it compiles. It can look completely fine and still have a subtle bug or a security hole. Test it like you'd test your own code, because it kind of is your own code now.",
          "It's really easy to let these tools do so much that you stop actually understanding your own project. Which defeats the point when you're still a student trying to learn.",
          "Check your college's policy on AI-assisted work before submitting anything academic. Some professors are chill about it, some are not, and it's not worth finding out the hard way.",
          "Never hardcode API keys into a repo. I know I already said this but it's worth repeating because it happens constantly.",
        ]}
      />

      <ProseH2>So which one should you actually use</ProseH2>
      <ProseP>
        Depends what you&apos;re doing honestly. If you&apos;re broke and
        don&apos;t mind the terminal, OpenCode. If you want one tool that helps
        with code AND writing AND just thinking out loud, Claude. If you want
        the smoothest coding experience and can spare the money eventually,
        Cursor. ZCode if you want to mess around with agentic coding for free
        but keep it to personal projects. And Sakana AI if you&apos;re just
        curious where this whole field is headed next.
      </ProseP>
      <ProseP>
        None of them are free in the way they look free. You&apos;re paying with
        your data, your time figuring out the interface, or your attention to
        detail when you&apos;re checking what they output. Use them,
        they&apos;re genuinely useful, just don&apos;t turn your brain off while
        you do.
      </ProseP>

      <SourcesBox>
        OpenCode.ai, VentureBeat, Verdent Guides, Z.ai docs, Bitdoze.com,
        EveryDev.ai, NxCode, Cursor pricing/privacy docs (via UI Bakery, No Code
        MBA, TechJack Solutions), Sakana AI&apos;s official site, Wikipedia,
        Medium (AI Tomorrow), MindStudio.ai.
      </SourcesBox>
    </div>
  );
}
