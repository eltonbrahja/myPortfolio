const fs = require('fs');
const files = [
  'src/pages/Privacy.jsx',
  'src/pages/Services.jsx',
  'src/pages/Portfolio.jsx',
  'src/pages/Home.jsx',
  'src/pages/NotFound.jsx',
  'src/pages/Contact.jsx',
  'src/pages/BlogPost.jsx',
  'src/pages/Blog.jsx',
  'src/pages/About.jsx',
  'src/components/PageTransition.jsx',
  'src/components/GlassCard.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/import\s*\{\s*\}\s*from\s*'framer-motion';\n?/g, '');
  content = content.replace(/import\s*\{\s*AnimatePresence\s*\}\s*from\s*'framer-';/g, "import { AnimatePresence } from 'framer-motion';");
  fs.writeFileSync(file, content, 'utf8');
});
