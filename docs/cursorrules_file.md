# .cursorrules

## Project Overview

*   **Type:** cursorrules_file
*   **Description:** A comprehensive design for the Lashon.Music website, drawing inspiration from Sabrina Carpenter’s site and Wix Template #2956. The site will use bold imagery, striking visuals, and refined editorial layout to showcase Lashon’s artistry, biography, music releases, and future collaborations.
*   **Primary Goal:** Increase engagement with Lashon’s music, expand her fan base, and facilitate connections for potential collaborations through clear calls-to-action, integrated streaming links, newsletter sign-ups, and social media connectivity.

## Project Structure

### Framework-Specific Routing

*   **Directory Rules:**

    *   Wix Template #2956: Structure is managed via Wix’s visual builder. Pages are created using a drag-and-drop editor where navigation is defined through individual pages (Home, About, Music, Gallery, Contact) rather than traditional file-based routing.
    *   Example 1: While frameworks like Next.js require an `app/[route]/page.tsx` convention, Wix organizes content by pages within its site dashboard.
    *   Example 2: Unlike file-based routers such as React Router 6 which use a `src/routes/` folder, Wix manages routing internally via its template settings.

### Core Directories

*   **Versioned Structure:**

    *   Site Pages: Each page (e.g., Home, About, Music, Gallery, Contact) is defined within the Wix editor as separate entities, ensuring a modular, easy-to-update structure.
    *   Media Assets: Images and multimedia files (green dress shoots, backless black images, white piano ensembles) are organized within Wix’s Media Manager for consistent access across pages.

### Key Files

*   **Stack-Versioned Patterns:**

    *   Home Page: Configured as the main landing page, featuring full-width hero sections, curated CTAs, and integrated content blocks.
    *   About Page: Combines biographical text and imagery on a well-balanced layout to highlight Lashon’s backstory and artistic evolution.
    *   Music Page: Emphasizes featured releases (e.g., ‘Moolah’) with embedded streaming links and player integrations.
    *   Additional Pages: Gallery and Contact pages follow similar guidelines to maintain visual consistency and usability.

## Tech Stack Rules

*   **Version Enforcement:**

    *   Wix@Template2956: Must adhere to Wix’s responsive design principles. Utilize built-in styling and dynamic content elements. All CTAs, form validations, and media integrations should follow Wix’s performance and accessibility guidelines.

## PRD Compliance

*   **Non-Negotiable:**

    *   "The site will feature bold, modern imagery with a deep emerald green, gold accents, and high-contrast black/off-white themes paired with clear navigation and direct streaming integrations." This requirement must be implemented exactly as specified to ensure the brand’s visual and functional consistency.

## App Flow Integration

*   **Stack-Aligned Flow:**

    *   Example: The Home page in Wix Template #2956 will feature a dynamic hero section with a rotating slideshow (showcasing images of Lashon in her green dress, backless black attire, and white piano ensemble). CTAs such as "Explore My Music" route users directly to the Music page, ensuring seamless navigation throughout the site.
