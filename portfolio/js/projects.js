/* ==========================================================================
   YOUR CONTENT LIVES HERE
   --------------------------------------------------------------------------
   Edit SITE for your name, intro and contact details.
   Add, remove or reorder entries in PROJECTS to change your portfolio.

   Each project:
     id        – short unique slug used in the URL (no spaces), e.g. "fintech-app"
     title     – headline of the piece
     dek       – one-line subtitle under the headline (magazine "dek")
     category  – e.g. "Mobile App", "Web Platform", "Design System"
     year      – e.g. "2026"
     role      – what you did
     client    – company / course / "Personal project"
     tools     – array of tools, e.g. ["Figma", "Maze"]
     cover     – path to a cover image, e.g. "images/fintech-cover.jpg"
                 (leave "" to use the colored placeholder)
     tone      – fallback cover color when there is no image
     featured  – true puts this project on the "cover story" spot (use one)
     blurb     – 1–3 sentences shown on the cards on the home page
     story     – the full write-up; one string per paragraph.
                 Use { heading: "..." } for a section heading.
     pullQuote – a standout line, shown large in the article
     gallery   – images for the article: { src: "images/x.png", caption: "..." }
     links     – e.g. { label: "View prototype", url: "https://figma.com/..." }
   ========================================================================== */

const SITE = {
  name: "Your Name",
  title: "UX / UI Designer",
  masthead: "Portfolio", // the big magazine logo at the top
  issue: "Vol. 01",
  tagline: "Thoughtful interfaces, made with care.",
  intro:
    "I design digital products that feel effortless — from research and strategy through to polished, pixel-perfect interfaces. Welcome to my edit of selected work.",
  about:
    "Write a few sentences about yourself here: where you're based, what kind of problems you love solving, and what you're looking for next. Keep it warm and personal — this is your editor's letter.",
  email: "hello@yourname.com",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "Dribbble", url: "https://dribbble.com/" },
    { label: "Resume", url: "#" },
  ],
};

const PROJECTS = [
  {
    id: "atelier-app",
    title: "Atelier",
    dek: "Reimagining how people plan, shop and style their wardrobe.",
    category: "Mobile App",
    year: "2026",
    role: "Lead UX/UI Designer",
    client: "Personal project",
    tools: ["Figma", "FigJam", "Maze", "Protopie"],
    cover: "",
    tone: "#c9a69a",
    featured: true,
    blurb:
      "A wardrobe companion app that helps users mix and match the pieces they already own. I led research, information architecture and the visual system.",
    pullQuote: "The best outfit is usually already in your closet — the design job was helping people see it.",
    story: [
      { heading: "The brief" },
      "Replace this with the problem you set out to solve. Who were the users, what was frustrating them, and what did success look like?",
      { heading: "The process" },
      "Describe your research, the insights that shaped the direction, and the key decisions you made along the way. Mention interviews, competitive audits, journey maps, wireframes and testing rounds.",
      { heading: "The outcome" },
      "Share the final design and the results: metrics, user feedback, or what you learned. End with what you would do next.",
    ],
    gallery: [
      { src: "", caption: "Onboarding flow — add your screenshot path here" },
      { src: "", caption: "Outfit builder — high-fidelity screens" },
    ],
    links: [{ label: "View prototype", url: "#" }],
  },
  {
    id: "harvest-dashboard",
    title: "Harvest",
    dek: "A calmer analytics dashboard for small farm co-ops.",
    category: "Web Platform",
    year: "2025",
    role: "Product Designer",
    client: "Client name",
    tools: ["Figma", "Notion", "Hotjar"],
    cover: "",
    tone: "#8f9a7a",
    blurb:
      "Simplified a cluttered reporting tool into a focused dashboard, cutting time-to-insight for co-op managers in usability tests.",
    pullQuote: "Less data on screen, more decisions made.",
    story: [
      { heading: "The brief" },
      "Write about the challenge here.",
      { heading: "The outcome" },
      "Write about what you shipped and the impact.",
    ],
    gallery: [],
    links: [],
  },
  {
    id: "lumen-design-system",
    title: "Lumen",
    dek: "Building a design system that a team of twelve actually uses.",
    category: "Design System",
    year: "2025",
    role: "UI Designer",
    client: "Client name",
    tools: ["Figma", "Storybook", "Tokens Studio"],
    cover: "",
    tone: "#2f2a28",
    blurb:
      "Components, tokens and documentation that brought consistency across three products and sped up handoff to engineering.",
    pullQuote: "A system is only as good as the people who adopt it.",
    story: ["Write your case study here."],
    gallery: [],
    links: [],
  },
  {
    id: "kin-health",
    title: "Kin",
    dek: "Designing a gentler appointment experience for family caregivers.",
    category: "UX Research",
    year: "2024",
    role: "UX Researcher & Designer",
    client: "Course / bootcamp",
    tools: ["Figma", "Dovetail", "Optimal Workshop"],
    cover: "",
    tone: "#b8735a",
    blurb:
      "Interviews and card sorting with caregivers revealed where booking broke down; the redesign focused on shared calendars and reminders.",
    pullQuote: "",
    story: ["Write your case study here."],
    gallery: [],
    links: [],
  },
];
