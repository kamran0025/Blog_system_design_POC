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
  {
    id: 'the-art-of-code-review',
    title: 'The Art of a Useful Code Review',
    excerpt:
      'Code reviews work best when they improve the code without turning into a battle over personal preferences.',
    author: 'Daniel Brooks',
    date: '2026-04-28',
    category: 'Engineering',
    readTime: '5 min read',
    content: [
      'A good code review is not a test of who knows more. It is a collaborative process for finding problems, sharing context, and making the code easier to maintain.',
      'Focus comments on correctness, maintainability, performance, and consistency with established patterns. Avoid spending review time on subjective preferences that do not materially improve the code.',
      'The best reviewers explain why something should change instead of simply pointing out that it is wrong. That small difference turns a review into a learning opportunity.',
    ],
  },
   {
    id: 'frontend-performance-mistakes',
    title: 'Frontend Performance Mistakes We Keep Making',
    excerpt:
      'Most performance problems are not caused by one huge mistake. They come from small decisions repeated throughout an application.',
    author: 'Marcus Chen',
    date: '2026-04-15',
    category: 'Engineering',
    readTime: '8 min read',
    content: [
      'Frontend performance is often treated as something to optimize at the end of a project. By then, inefficient rendering patterns, oversized dependencies, and unnecessary network requests can already be deeply embedded in the application.',
      'Start by measuring before optimizing. Look at bundle size, network waterfalls, rendering performance, and real-user metrics. A slow page should have a measurable reason for being slow.',
      'Performance is also a product feature. Faster navigation, responsive interactions, and predictable loading states make an application feel more reliable even when the underlying functionality has not changed.',
    ],
  },
  {
    id: 'when-to-build-a-design-system',
    title: 'When Should You Build a Design System?',
    excerpt:
      'A design system can accelerate a product, but only when the team has enough repetition to justify the investment.',
    author: 'Sofia Bennett',
    date: '2026-03-30',
    category: 'Design',
    readTime: '7 min read',
    content: [
      'Not every product needs a full design system on day one. Early teams often benefit more from a small collection of reusable patterns than from a large component library with strict governance.',
      'The right time to invest usually appears when the same problems start being solved repeatedly. Buttons, forms, dialogs, tables, spacing, typography, and accessibility patterns are strong candidates for standardization.',
      'A design system should reduce decisions, not create more of them. If developers and designers spend more time maintaining the system than benefiting from it, the system has become the product instead of supporting the product.',
    ],
  },
  {
    id: 'learning-to-debug-effectively',
    title: 'Learning to Debug Effectively',
    excerpt:
      'Debugging is less about finding the right answer quickly and more about systematically eliminating the wrong ones.',
    author: 'Priya Nair',
    date: '2026-03-18',
    category: 'Engineering',
    readTime: '5 min read',
    content: [
      'Strong debugging starts with a clear description of the problem. Before changing code, identify what you expected to happen, what actually happened, and the smallest set of steps that reproduces the issue.',
      'Avoid making multiple changes at once. If you change five things and the bug disappears, you still do not know which change fixed it. Small experiments produce better information.',
      'Over time, debugging becomes a mental model. Logs, browser tools, network traces, stack traces, and breakpoints are not just tools; they are ways of asking the system better questions.',
    ],
  },
  {
    id: 'productivity-without-burnout',
    title: 'Productivity Without the Burnout',
    excerpt:
      'Doing more work is not always the same as creating more value. Sustainable productivity starts with knowing what deserves your attention.',
    author: 'Jordan Reyes',
    date: '2026-02-25',
    category: 'Productivity',
    readTime: '6 min read',
    content: [
      'Modern work makes it easy to confuse activity with progress. Notifications, meetings, messages, and task lists can fill an entire day without moving an important project forward.',
      'A better approach is to identify the small number of outcomes that matter most and protect time for them. Everything else should either support those outcomes or be deliberately deprioritized.',
      'Productivity should also be sustainable. A system that works for two weeks and leaves you exhausted is not a productivity system; it is a temporary sprint.',
    ],
  },
  {
    id: 'designing-for-accessibility',
    title: 'Accessibility Is Part of Good Design',
    excerpt:
      'Accessible interfaces are not a special version of a product. They are simply well-designed interfaces that work for more people.',
    author: 'Ava Whitfield',
    date: '2026-02-10',
    category: 'Design',
    readTime: '6 min read',
    content: [
      'Accessibility is easiest to implement when it is considered from the beginning. Semantic HTML, keyboard navigation, readable contrast, clear focus states, and descriptive labels are foundational design decisions.',
      'Accessibility also improves usability for everyone. Clear forms, predictable navigation, readable typography, and helpful feedback benefit users regardless of whether they use assistive technology.',
      'The goal is not to create a separate accessible experience. The goal is to create one experience that works well for as many people as possible.',
    ],
  },
  {
    id: 'frontend-architecture-decisions',
    title: 'Making Better Frontend Architecture Decisions',
    excerpt:
      'Good architecture is not about predicting the future. It is about making today\'s code easy to change when the future arrives.',
    author: 'Marcus Chen',
    date: '2026-01-28',
    category: 'Engineering',
    readTime: '9 min read',
    content: [
      'Frontend architecture becomes difficult when teams optimize for hypothetical requirements instead of real ones. The best architecture starts with understanding the product, the team, and the problems that actually exist.',
      'Clear boundaries are often more valuable than clever abstractions. Components should have understandable responsibilities, data flow should be predictable, and shared logic should only be extracted when repetition justifies it.',
      'Architecture should evolve alongside the product. A structure that was perfect for a small application may become a constraint later, and that is normal. Good architecture leaves room for those changes.',
    ],
  },
  {
    id: 'working-with-legacy-code',
    title: 'How to Work With Legacy Code',
    excerpt:
      'Legacy code is not necessarily bad code. It is code that has accumulated history, constraints, and assumptions that may no longer be obvious.',
    author: 'Daniel Brooks',
    date: '2026-01-15',
    category: 'Engineering',
    readTime: '7 min read',
    content: [
      'The first mistake when working with legacy code is assuming that everything needs to be rewritten. Large rewrites often remove years of accumulated knowledge while introducing an entirely new set of bugs.',
      'Start by understanding the existing behavior. Add tests around important paths, document confusing decisions, and make small changes that reduce risk without changing unrelated functionality.',
      'The goal is not to make old code look modern overnight. The goal is to make every change slightly safer and every future improvement slightly easier.',
    ],
  },
  {
    id: 'the-power-of-small-improvements',
    title: 'The Power of Small Improvements',
    excerpt:
      'Big improvements are often the result of many small decisions made consistently over time.',
    author: 'Priya Nair',
    date: '2025-12-20',
    category: 'Productivity',
    readTime: '4 min read',
    content: [
      'It is tempting to wait for the perfect opportunity to make a major improvement. In practice, teams often make more progress by fixing small problems whenever they encounter them.',
      'A clearer error message, a faster development command, a better loading state, or a missing test may seem insignificant individually. Together, these improvements can dramatically change the quality of a product and the experience of working on it.',
      'Progress does not always need to be dramatic. Consistent improvement compounds, and that is one of the most reliable advantages a team can build.',
    ],
  },
];

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}
