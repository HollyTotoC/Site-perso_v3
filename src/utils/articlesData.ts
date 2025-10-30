// Import static des articles markdown
import article001 from '../content/research/001-agentic-coding.md?raw';
import article002 from '../content/research/002-web3d-performance.md?raw';
import article003 from '../content/research/003-modern-ux.md?raw';

// Map des articles avec leur contenu
export const articlesContent: Record<string, string> = {
    '001-agentic-coding.md': article001,
    '002-web3d-performance.md': article002,
    '003-modern-ux.md': article003,
};

// Fonction pour extraire le contenu sans frontmatter
export const getArticleContent = (fileName: string): string => {
    const rawContent = articlesContent[fileName];
    if (!rawContent) {
        return '# Article non trouvé\n\nCet article n\'est pas disponible.';
    }

    // Retire le frontmatter (entre les --- )
    const contentParts = rawContent.split('---');
    if (contentParts.length >= 3) {
        // Le contenu est après le deuxième ---
        return contentParts.slice(2).join('---').trim();
    }

    return rawContent;
};