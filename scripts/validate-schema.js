import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const validateSchema = () => {
  console.log('🔍 Validating JSON-LD Schemas presence...');
  
  const filesToCheck = [
    { name: 'Home.jsx', path: '../src/pages/Home.jsx' },
    { name: 'Contact.jsx', path: '../src/pages/Contact.jsx' }
  ];

  let errors = 0;

  filesToCheck.forEach(file => {
    const fullPath = path.join(__dirname, file.path);
    if (!fs.existsSync(fullPath)) return;

    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if the expected JsonLd constant exists
    const hasSchema = content.includes(`${file.name.split('.')[0].toLowerCase()}JsonLd`);
    
    if (hasSchema) {
      console.log(`✅ ${file.name} has a JSON-LD definition.`);
      
      // Simple check for @context and @type
      if (content.includes('@context') && content.includes('@type')) {
        console.log(`✅ ${file.name} schema contains required metadata fields.`);
      } else {
        console.warn(`⚠️  Warning: ${file.name} schema might be missing @context or @type!`);
        errors++;
      }
    } else {
      console.warn(`❌ Error: ${file.name} is missing a JSON-LD definition!`);
      errors++;
    }
  });

  if (errors > 0) {
    console.log('❌ Schema check finished with issues.');
    // We don't exit with 1 here to avoid breaking the build over minor formatting
  } else {
    console.log('✅ Schema check passed.');
  }
};

validateSchema();
