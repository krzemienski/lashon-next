
#!/bin/bash

echo "Fixing Responsive Header Issues..."

# Create backup directory
mkdir -p backup-files

# Backup original files
echo "Creating backups..."
cp src/components/home/Intro.tsx backup-files/Intro.tsx.bak
cp src/styles/fonts.css backup-files/fonts.css.bak
cp src/app/globals.css backup-files/globals.css.bak
cp src/components/layout/MainLayout.tsx backup-files/MainLayout.tsx.bak
echo "Backups created in backup-files directory."

# Update Intro.tsx
echo "Updating Intro.tsx..."
cat > src/components/home/Intro.tsx << 'EOF'
'use client';

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { getAssetPath } from '@/utils/assetPath';
import Link from 'next/link';

export default function Intro() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: true
  });
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Set initial screen width
    setScreenWidth(window.innerWidth);
    
    // Update screen width on resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Video handling
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented - silent fallback
        });
      }
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={getAssetPath('/images/hero-bg.jpg')}
          className="object-cover w-full h-full"
          preload="auto"
        >
          <source src={getAssetPath('/videos/hero-background-2.mp4')} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <motion.div 
        className="container-width relative z-10 text-center px-4 hero-text-container"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        {screenWidth < 375 ? (
          <img 
            src={getAssetPath('/images/lashon-text-logo.png')} 
            alt="LASHON" 
            className="w-full max-w-[280px] mx-auto mb-6" 
          />
        ) : (
          <h1 className="text-[3.5rem] xs:text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] font-amsterdam text-white mb-6 leading-[0.85] tracking-normal">
            LASHON
          </h1>
        )}
        
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 font-poppins max-w-2xl mx-auto tagline-text">
          {screenWidth < 375 ? 
            "Miami-Born • NY-Trained • Rising" : 
            "Miami-Born • New York-Trained • Ready to Rise"
          }
        </p>
        
        <a
          href="#latest-release"
          className="btn-primary text-base sm:text-lg px-8 py-4"
        >
          Explore My Music
        </a>
      </motion.div>
    </section>
  );
}
EOF

# Append to fonts.css
echo "Updating fonts.css..."
cat >> src/styles/fonts.css << 'EOF'

/* Media queries for font optimization */
@media (max-width: 375px) {
  .font-amsterdam {
    letter-spacing: -0.02em;
  }
  
  .hero-text-container {
    overflow-x: hidden;
    max-width: 100%;
  }
  
  .tagline-text {
    font-size: 0.875rem;
    padding: 0 0.5rem;
  }
}
EOF

# Update globals.css
echo "Updating globals.css..."
# Use sed to find utilities section and add the new class
sed -i.tmp '/\@layer utilities/a \
  /* Hero text container */ \
  .hero-text-container { \
    overflow-x: hidden; \
    max-width: 100%; \
  }' src/app/globals.css
rm src/app/globals.css.tmp

# Create temp folder for the logo
mkdir -p temp-assets

# Generate a placeholder image file
echo "Creating placeholder logo image..."
cat > temp-assets/placeholder.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" width="280" height="60">
  <text x="10" y="40" font-family="Arial" font-size="40" fill="gold">LASHON</text>
</svg>
EOF

# Update MainLayout.tsx to make navigation logo responsive
echo "Updating MainLayout.tsx logo..."
# This is more complex as we need to find and replace a specific block
# For shell script, we'll use a simpler approach - inform user to make the change manually

echo ""
echo "-------------------------------------------"
echo "IMPORTANT NEXT STEPS:"
echo "1. Make sure to create a lashon-text-logo.png file in /public/images/ directory"
echo "2. This should be a PNG of your \"LASHON\" text in Amsterdam font"
echo "3. Optimal size: ~280px width with transparent background"
echo "4. A placeholder SVG has been created in temp-assets folder"
echo ""
echo "Optional but recommended - Update your MainLayout.tsx file:"
echo "Find the Logo link and replace with this code:"
echo ""
echo "<Link href=\"/\" className=\"text-xl xs:text-2xl sm:text-3xl font-amsterdam text-gold hover:text-burnt-orange transition-colors leading-none max-w-[180px] inline-block\">"
echo "  <span className=\"hidden sm:inline\">LASHON</span>"
echo "  <img "
echo "    src={getAssetPath('/images/lashon-text-logo.png')} "
echo "    alt=\"LASHON\" "
echo "    className=\"h-8 sm:hidden\" "
echo "  />"
echo "</Link>"
echo "-------------------------------------------"
echo ""

echo "Responsive fixes completed!"