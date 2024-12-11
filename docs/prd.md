# Product Requirements Document (PRD)

## Product Overview
**Product Name:** Accai  
**Description:** Accai is a therapeutic, LLM-driven productivity chatbot for remote workers and neurodivergent users. It integrates ACT and somatic experiencing principles to help users identify emotional barriers, stay accountable to their goals, and maintain steady progress. The initial MVP focuses on a landing page that clearly communicates the value proposition, followed by a functional web app with a simple chatbot interface and weekly summary capabilities.

## Objectives & Key Results
- **Objective:** Validate demand for a human-like productivity coach that supports emotional well-being.
- **Key Result 1:** Achieve at least 50 sign-ups in the first month from the landing page.
- **Key Result 2:** Collect feedback from at least 10 early testers to refine the chatbot experience.

## Target Audience
- **Primary:** Remote workers who feel isolated or struggle with accountability.
- **Secondary:** Neurodivergent individuals seeking supportive, flexible productivity guidance.

## Core Features (MVP)
1. **Landing Page:**
   - Clear value proposition ("Your supportive, values-driven productivity coach.")
   - Simple explanation of the benefits.
   - Email capture form to gather leads.
   - Basic branding and visual identity.

2. **Chatbot Interface (Early Beta):**
   - Connects to Anthropic’s API with a therapeutic pre-prompt.
   - Allows users to input goals and track progress.
   - Weekly summary generated and shown in the chatbot interface.

3. **Goal Tracking & Summaries:**
   - Users define short-term and long-term goals during onboarding.
   - System stores and updates progress data.
   - Weekly summaries highlight accomplishments and areas for improvement.

## Non-Goals (for MVP)
- Complex team dashboards or manager interfaces.
- Advanced analytics or personalizations beyond ACT-based values.
- Offline desktop/mobile apps.

## Technical Requirements
- **Frontend:** Next.js, Tailwind CSS/Chakra UI
- **Backend:** Next.js API routes (Node.js), Supabase for database and auth
- **LLM Integration:** Anthropic API
- **Hosting:** Vercel for frontend and serverless backend

## User Flows (MVP)
1. **Landing Page Flow:**
   - User visits landing page -> Reads about features and benefits -> Enters email to stay informed or request early access.

2. **Chatbot Setup Flow:**
   - Upon invitation: User signs up -> Defines values (ACT) -> Sets initial goals -> Chatbot acknowledges and sets initial milestones.

3. **Progress Check-In & Summaries:**
   - User provides updates throughout the week -> Chatbot monitors progress and on a set cadence (weekly), provides a summary.

## Testing & Validation
- Conduct user interviews with early testers.
- Collect qualitative feedback to refine messaging and chatbot tone.
- Track sign-up conversions and session lengths.

## Future Iterations
- Introduce dynamic progress grids.
- Enhanced personalization and emotional state sensing.
- Integrations with productivity tools (e.g., Google Calendar, Slack).

## Implementation Status

### Completed Features
1. **Landing Page:**
   - ✅ Modern, responsive design with Next.js and Tailwind CSS
   - ✅ Clear value proposition
   - ✅ Feature highlights using grid layout
   - ✅ Benefits section with shadcn Cards
   - ✅ Email capture form UI

2. **Technical Foundation:**
   - ✅ Next.js 14 setup with TypeScript
   - ✅ Tailwind CSS configuration
   - ✅ shadcn/ui component integration
   - ✅ Basic API route structure

### In Progress
1. **Backend Integration:**
   - Supabase connection setup
   - Email storage implementation
   - Environment variable configuration

### Pending Features
[Previous content about pending features remains unchanged...]

## Technical Updates
- **Frontend Framework:** Next.js 14 with TypeScript
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Database:** Supabase
- **API Routes:** Next.js API routes with TypeScript

## Next Steps
1. Complete Supabase integration
2. Deploy to Vercel
3. Begin tracking email sign-ups
4. Gather initial user feedback

[Rest of the PRD remains unchanged...]