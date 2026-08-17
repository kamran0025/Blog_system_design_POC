import type { Post } from '../types/post';

export const posts: Post[] = [
  {
    id: 'designing-for-clarity',
    title: 'Designing for Clarity: A Minimalist Approach',
    excerpt:
      'Why the best interfaces say less and communicate more, and how to strip your designs down to what actually matters.',
    author: 'Ava Whitfield',
    date: '2026-07-28',
    category: 'Design',
    readTime: '5 min read',
    content: [
      'Great design is rarely about adding more. It is about removing everything that does not serve the user in that moment. Clarity is a discipline, not a style.',
      'When you strip an interface down to its essentials, you are forced to make decisions about hierarchy. What matters most? What can wait? What can disappear entirely? These are the questions that separate a cluttered product from a confident one.',
      'Start every design review by asking what you can remove, not what you can add. You will be surprised how often the answer improves the experience.',
    ],
  },
  {
    id: 'state-of-react-2026',
    title: 'The State of React in 2026',
    excerpt:
      'Server components, the new compiler, and a look at where the ecosystem is heading this year.',
    author: 'Marcus Chen',
    date: '2026-07-15',
    category: 'Engineering',
    readTime: '8 min read',
    content: [
      'React has spent the last few years quietly rebuilding its foundations. The compiler removes an entire category of manual optimization, and server components blur the line between backend and frontend rendering in ways that used to require custom frameworks.',
      'For teams building new products today, the calculus has shifted. You spend less time thinking about memoization and more time thinking about data boundaries: what should render on the server, what needs interactivity, and where the seams between them should live.',
      'The ecosystem is still catching up in places, but the direction is clear: less boilerplate, fewer footguns, and a framework that increasingly gets out of your way.',
    ],
  },
  {
    id: 'writing-for-busy-readers',
    title: 'Writing for Busy Readers',
    excerpt:
      'Most people skim before they read. Here is how to structure your writing so the skim is worth it.',
    author: 'Priya Nair',
    date: '2026-06-30',
    category: 'Writing',
    readTime: '4 min read',
    content: [
      'The average reader decides whether to keep reading within the first two sentences. That is not a reason to write worse — it is a reason to front-load your point.',
      'Put your conclusion first. Use short paragraphs. Break up dense ideas with subheadings and lists. None of this dumbs down the content; it respects the reader\'s time enough to let them choose how deep to go.',
      'The best technical and business writing reads like a pyramid: the tip is the takeaway, and each layer below adds detail for those who want it.',
    ],
  },
  {
    id: 'remote-team-rituals',
    title: 'Small Rituals That Hold Remote Teams Together',
    excerpt:
      'It is not the tools that make distributed teams work. It is the habits they build around them.',
    author: 'Jordan Reyes',
    date: '2026-06-12',
    category: 'Culture',
    readTime: '6 min read',
    content: [
      'Every remote team eventually learns that Slack and video calls are necessary but not sufficient. What actually builds trust is repetition: the same stand-up format, the same weekly demo, the same way of closing out a project.',
      'These rituals do not need to be elaborate. A five-minute Friday recap where everyone shares one win and one blocker does more for morale than a quarterly all-hands.',
      'The teams that thrive remotely are the ones that treat culture as something to be designed deliberately, not something that happens on its own.',
    ],
  },
  {
    id: 'typescript-patterns-that-scale',
    title: 'TypeScript Patterns That Actually Scale',
    excerpt:
      'A practical look at the type patterns worth adopting on a growing codebase, and the ones worth avoiding.',
    author: 'Marcus Chen',
    date: '2026-05-22',
    category: 'Engineering',
    readTime: '7 min read',
    content: [
      'TypeScript rewards restraint. The teams with the healthiest codebases are rarely the ones using the most advanced type-level features; they are the ones using the simplest types consistently.',
      'Discriminated unions are worth their weight in gold for modeling state. Utility types like Pick and Omit keep your interfaces DRY without introducing abstraction for its own sake. Generics are powerful, but every generic parameter is a small tax on the next reader.',
      'The goal is not to prove what TypeScript can do. It is to make the compiler catch the bugs your reviewers would otherwise have to.',
    ],
  },
    {
    id: 'building-better-dashboard-experiences',
    title: 'Building Better Dashboard Experiences',
    excerpt:
      'Dashboards are not about showing everything. They are about helping people understand what deserves their attention.',
    author: 'Ava Whitfield',
    date: '2026-05-10',
    category: 'Design',
    readTime: '6 min read',
    content: [
      'A dashboard becomes useful when it answers questions before the user has to ask them. The goal is not to display every available metric, but to surface the information that helps someone make a decision.',
      'Visual hierarchy matters more than the number of charts on the page. Start with the metrics that define success, then provide supporting information for users who need to investigate further.',
      'Good dashboards also account for empty, loading, and error states. A polished dashboard is not just a collection of beautiful charts; it is an experience that remains understandable regardless of the underlying data.',
    ],
  },
];

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}
