## Project: A browser based file manager

## Which to use (Typescript or Javascript) ?

> Answer: Typescript (v7+)

## Which to use ( React or Nextjs ) ?

> Answer: React, because this is a browser based project meaning no backend.

## Which State Management to use ( Zustand or Redux toolkit) ?

> Answer: Zustand, 20 min crash course: [Stop Using Context in React - Use Zustand](https://www.youtube.com/watch?v=ULS7LHNScHc)

## Recursive data structures

> Answer: I don't know [click here](https://www.google.com/search?q=what+is+recursive+data+structure+in+typescript) to search and learn the concept

## Component architecture

> Answer: Component-Based Architecture is a software design approach that breaks applications down into independent, reusable, and self-contained functional units called components
>
> - **Modularity:** Systems are split into manageable, isolated parts that are easier to build and test.
> - **Encapsulation:** Components hide their internal logic and state, exposing functionality strictly through clear, well-defined interfaces.
> - **Reusability:** Individual building blocks can be reused across multiple pages, features, or entirely different projects.
> - **Interoperability:** Standardized interfaces allow different components to communicate seamlessly.
> - **Replaceability:** You can swap out or upgrade a single component without breaking the rest of the system.

## Responsive UI

> Answer: we will use Tailwind CSS with ShadcnUI and also need to be responsive

## Sidebar File Tree

> Answer: [https://ui.shadcn.com/blocks/sidebar#sidebar-11](https://ui.shadcn.com/blocks/sidebar#sidebar-11)

## Things NOT to Do

- Do NOT build a deeply nested/recursive state model in Zustand
  > Storing nested arrays inside objects will make CRUD actions (like renaming or deleting nested files) overly complex. Store everything in a flat map keyed by ID (Record<string, FileNode>) with parentId pointers instead.
- Do NOT install TanStack Router or React Router
  > Routing will add unnecessary complexity. Track navigation with an activeNodeId state in Zustand.
- Do NOT use IndexedDB or complex databases
  > Plain text file structures only require kilobytes of storage. Keep it simple with localStorage via Zustand's persist middleware.
- Do NOT write code before mapping out your data model
  > Don't jump straight into styling or UI components until your state schema, action signatures, and helper logic are defined in your plan.md.
- Do NOT use AI/LLMs to write the code for you
  > Assessment guidelines emphasize writing, structuring, and defending all components, state handlers, and algorithms yourself so you can explain them during your evaluation.

## State & Data Model Definition

```typescript
export type ItemType = 'file' | 'folder';

export type Item = {
  id: string;
  name: string;
  type: ItemType;
  parentId: string | null;
  content?: string; // Optional: Present when type === 'file'
  createdAt: string;
  updatedAt: string;
};
```
