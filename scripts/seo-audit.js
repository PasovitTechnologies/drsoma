import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const auditSEO = () => {
  const pagesDir = path.join(__dirname, '../src/pages');
  const files = fs.readdirSync(pagesDir);
  
  let issues = 0;
  console.log('🔍 Starting SEO Audit...');

  files.forEach(file => {
    if (file.endsWith('.jsx')) {
      const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
      
      // Check for <SEO component usage
      if (!content.includes('<SEO')) {
        console.warn(`⚠️  Warning: ${file} is missing the <SEO /> component!`);
        issues++;
      }

      // Check for title and description props
      if (content.includes('<SEO') && (!content.includes('title=') || !content.includes('description='))) {
        console.warn(`⚠️  Warning: ${file} has <SEO /> but might be missing title or description props!`);
        issues++;
      }
    }
  });

  if (issues === 0) {
    console.log('✅ SEO Audit passed! All pages have SEO components.');
  } else {
    console.log(`❌ SEO Audit finished with ${issues} warning(s).`);
  }
};

auditSEO();
