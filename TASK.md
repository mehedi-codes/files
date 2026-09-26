**Webbly Media Frontend Developer Assessment Task**

### **Task: Mini Workspace Explorer**

**⚠️ IMPORTANT \- AI USAGE POLICY**

**The use of AI tools is strongly prohibited for this task.**

Webbly Media wants to evaluate your actual frontend development, problem-solving, and code-structuring abilities. Please do not use ChatGPT, GitHub Copilot, Claude, Gemini, Cursor, or similar AI coding tools to generate or modify your solution.

**You must be able to explain and defend every part of your implementation during the evaluation.**

## **1\. Objective**

Build a **Mini Workspace Explorer**, a browser-based file manager where users can create, navigate, search, edit, rename, and delete folders and text files.

- React / Next.js
- TypeScript
- State management
- Recursive data structures
- Component architecture
- Responsive UI
- Problem solving and edge cases

## **2\. Core Requirements**

### **File & Folder Structure**

Represent the workspace as a hierarchical structure.

Each item should have at least:

{  
id: string;  
name: string;  
type: "folder" | "file";  
parentId: string | null;  
}

Folders can contain both folders and text files.

**Example:**

Workspace  
├── Projects  
│ ├── Webbly  
│ │ ├── notes.txt  
│ │ └── tasks.txt  
│ └── Personal  
├── Documents  
└── README.txt

The structure should support **arbitrary nesting levels**.

## **3\. User Interface**

Create a clean and responsive file-explorer interface.

### **Sidebar — Tree View**

- Display the folder hierarchy.
- Support nested folders.
- Expand/collapse folders.
- Highlight the selected folder.
- Clicking a folder opens it in the main panel.

### **Main Panel**

Display the contents of the selected folder.

Provide actions for:

- Create
- Rename
- Delete
- Search

Also display a breadcrumb such as:

Workspace / Projects / Webbly

**Breadcrumb items should be clickable.**

## **4\. Required Operations**

### **Create**

Allow users to create:

- New folder
- New text file

The item should be created inside the currently selected folder.

Handle basic validation such as:

- Empty names
- Duplicate names within the same folder

### **Rename**

Allow folders and files to be renamed.

### **Delete**

Allow folders and files to be deleted.

Deleting a folder must also delete **all nested contents**.

If the currently selected folder is deleted, the application should navigate to an appropriate parent folder.

## **5\. Text File Editor**

Clicking a text file should open an editor.

Users should be able to:

- View the file content
- Edit the content
- Save changes
- Navigate away and return without losing saved changes

A simple \<textarea\> is sufficient. A full code editor is **not required**.

## **6\. Search**

Implement workspace-wide search.

Example:

Search: "web"

📁 Webbly  
📄 web-notes.txt  
📄 website.txt

Search should work across nested folders.

Clicking a search result should navigate to its location.

## **7\. Persistence**

The application should persist data after a browser refresh.

You may use:

- localStorage
- IndexedDB
- Another browser-side solution

Persist at least:

- Created/renamed/deleted items
- File contents

**No backend is required.**

## **8\. Important Edge Cases**

Consider and handle cases such as:

- Duplicate file/folder names
- Empty folders
- Deleting a folder with nested contents
- Deleting the currently selected folder
- Searching for deeply nested files
- Unsaved text-file changes
- Empty workspace

You are free to decide the exact UX for these cases, but your decisions should be intentional and consistent.

## **9\. Deadline**

**Date & Time:** 23 September, 2026 \- 11:59 AM  
**Submission From Link:**

## **10\. Submission**

Please provide:

1. **GitHub repository**
2. **Live deployed URL**
3. **README.md**

The README should briefly explain:

- How to run the project
- Project structure
- State management approach
- File-system data structure
- Any important implementation decisions
