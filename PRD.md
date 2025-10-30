# Planning Guide

A professional staffing agency website that connects businesses with qualified candidates while showcasing services, expertise, and building trust through clean, corporate presentation.

**Experience Qualities**:
1. **Professional** - Corporate aesthetic that conveys reliability and competence in the staffing industry
2. **Trustworthy** - Clear information architecture with transparent service offerings and contact methods
3. **Accessible** - Easy navigation for both job seekers and employers to find relevant information quickly

**Complexity Level**: Content Showcase (information-focused)
  - Primarily a marketing/information website showcasing staffing services, industries served, and company value proposition with clear calls-to-action for contact

## Essential Features

### Hero Section with Call-to-Action
- **Functionality**: Prominent headline, subheading, and primary CTA buttons
- **Purpose**: Immediately communicate the company's value proposition and guide users to key actions
- **Trigger**: Page load
- **Progression**: User lands on page → Reads compelling headline → Clicks "Find Talent" or "Find Jobs" CTA
- **Success criteria**: Clear differentiation between employer and job seeker paths

### Services Overview
- **Functionality**: Display staffing services offered (temporary, permanent, contract-to-hire, etc.)
- **Purpose**: Educate visitors on available staffing solutions
- **Trigger**: Scroll or navigation to services section
- **Progression**: User views service cards → Clicks to learn more → Sees detailed service description
- **Success criteria**: Each service clearly explained with benefits

### Industries Served
- **Functionality**: Showcase key industries the agency specializes in
- **Purpose**: Build credibility and help visitors identify if the agency serves their sector
- **Trigger**: Scroll to industries section
- **Progression**: User views industry icons/cards → Identifies their industry → Gains confidence in agency expertise
- **Success criteria**: Visual representation of 6-8 key industries

### About/Why Choose Us
- **Functionality**: Company background, values, and differentiators
- **Purpose**: Build trust and explain what makes the agency unique
- **Trigger**: Scroll or click About section
- **Progression**: User reads company story → Understands unique value → Decides to engage
- **Success criteria**: Compelling narrative with key statistics or achievements

### Contact Section
- **Functionality**: Contact form, phone number, email, and location information
- **Purpose**: Provide multiple ways for prospects to reach out
- **Trigger**: User clicks contact CTA or scrolls to footer
- **Progression**: User fills form → Submits inquiry → Receives confirmation
- **Success criteria**: Form submission with validation and success feedback

### Testimonials/Success Stories
- **Functionality**: Display client or candidate testimonials
- **Purpose**: Social proof to build credibility
- **Trigger**: Scroll through page
- **Progression**: User reads testimonials → Builds trust → More likely to engage
- **Success criteria**: 3-4 authentic testimonials with names/companies

## Edge Case Handling
- **Form validation errors**: Clear inline messages guiding users to correct input
- **Mobile navigation**: Hamburger menu with smooth transitions for small screens
- **Empty state for dynamic content**: Graceful handling if testimonials or services aren't loaded
- **Long industry lists**: Grid layout that scales responsively without overwhelming
- **CTA button states**: Disabled state during form submission with loading indicator

## Design Direction

The design should feel professional, corporate, and trustworthy - reflecting the serious nature of staffing and employment services. A clean, modern interface with generous whitespace conveys organization and competence. The design should lean toward a classic, established aesthetic rather than playful, using a minimal interface where content and clear calls-to-action take center stage.

## Color Selection

Complementary color scheme - using blue (trust, corporate) with warm orange accents (energy, opportunity)

- **Primary Color**: Deep professional blue (oklch(0.45 0.12 250)) - Communicates trust, stability, and corporate professionalism
- **Secondary Colors**: Light blue backgrounds (oklch(0.96 0.02 250)) for section variation and visual interest
- **Accent Color**: Warm orange (oklch(0.65 0.15 45)) - Creates energy and highlights calls-to-action, represents opportunity and action
- **Foreground/Background Pairings**:
  - Background (White oklch(0.99 0 0)): Dark blue-gray text (oklch(0.25 0.02 250)) - Ratio 12.8:1 ✓
  - Card (Light gray-blue oklch(0.98 0.01 250)): Dark blue-gray text (oklch(0.25 0.02 250)) - Ratio 12.5:1 ✓
  - Primary (Deep Blue oklch(0.45 0.12 250)): White text (oklch(0.99 0 0)) - Ratio 8.2:1 ✓
  - Secondary (Light Blue oklch(0.96 0.02 250)): Primary blue text (oklch(0.45 0.12 250)) - Ratio 8.5:1 ✓
  - Accent (Warm Orange oklch(0.65 0.15 45)): White text (oklch(0.99 0 0)) - Ratio 4.9:1 ✓
  - Muted (Soft Gray oklch(0.94 0.005 250)): Muted foreground (oklch(0.50 0.02 250)) - Ratio 5.8:1 ✓

## Font Selection

Professional sans-serif typefaces that convey modernity and readability, appropriate for corporate communication and easy scanning of service information.

- **Primary Font**: Inter - Clean, highly legible, professional sans-serif for all body text and UI elements
- **Heading Font**: Plus Jakarta Sans - Slightly more distinctive sans-serif with geometric qualities for headings, maintaining professionalism

- **Typographic Hierarchy**:
  - H1 (Hero Headline): Plus Jakarta Sans Bold/48px/tight letter spacing/-0.02em
  - H2 (Section Headers): Plus Jakarta Sans Bold/36px/tight/-0.01em  
  - H3 (Card Titles): Plus Jakarta Sans Semibold/24px/normal/0em
  - Body (Paragraphs): Inter Regular/16px/relaxed line-height 1.7
  - Small (Captions): Inter Regular/14px/normal line-height 1.5
  - Button Text: Inter Semibold/16px/0.01em tracking

## Animations

Subtle, professional animations that guide attention and provide polish without distraction - animations should feel purposeful and understated, never calling attention to themselves but enhancing the sense of quality and responsiveness.

- **Purposeful Meaning**: Gentle fade-in on scroll for sections creates progressive disclosure, subtle hover states on cards and buttons reinforce interactivity
- **Hierarchy of Movement**: Primary CTAs get slightly more prominent hover effects (scale + shadow), section transitions use simple opacity fades, form interactions provide immediate feedback

## Component Selection

- **Components**: 
  - **Button** (Primary CTAs): Large size with primary/accent variants, rounded corners
  - **Card**: Service and industry cards with hover states, subtle shadows
  - **Input, Textarea, Label**: Contact form elements with clear focus states
  - **Badge**: For industry tags or service types
  - **Separator**: To divide sections cleanly
  - **Accordion** (optional): For FAQ section if needed
  - **Carousel** (optional): For testimonials if multiple
  
- **Customizations**: 
  - Hero section with gradient background overlay
  - Custom grid layouts for services (3-column) and industries (4-column)
  - Stats counter component for achievements/numbers
  - Custom navigation bar with logo and smooth scroll links
  
- **States**: 
  - Buttons: Default with solid background → Hover with slight scale and deeper shadow → Active with press effect → Disabled with reduced opacity
  - Form inputs: Default with border → Focus with primary color ring and border → Error with destructive color → Success with subtle green indicator
  - Cards: Resting with light shadow → Hover with elevated shadow and subtle scale → Active/selected state if applicable
  
- **Icon Selection**: 
  - Briefcase for staffing services
  - Buildings for industries
  - Users/UsersThree for team/candidate pool
  - ChartLineUp for growth/success
  - Phone, Envelope for contact methods
  - CheckCircle for benefits/features
  - ArrowRight for CTAs and links
  
- **Spacing**: 
  - Section padding: py-16 lg:py-24
  - Container max-width: max-w-7xl
  - Card padding: p-6 lg:p-8
  - Grid gaps: gap-6 lg:gap-8
  - Button padding: px-6 py-3 lg:px-8 lg:py-4
  
- **Mobile**: 
  - Mobile-first with hamburger navigation
  - Single column layouts stacking on mobile (< 768px)
  - Services grid: 1 column mobile → 2 tablet → 3 desktop
  - Industries grid: 2 columns mobile → 3 tablet → 4 desktop
  - Reduced font sizes and spacing on mobile (H1: 36px mobile → 48px desktop)
  - Touch-friendly button sizes (minimum 44x44px targets)
