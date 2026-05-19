import { contentfulClient } from "@/lib/contentful";
import siteLocal from "@/content/site.json";

/**
 * Obtiene la landing page desde Contentful
 * Si falla, retorna los datos locales del JSON
 */
export async function getLandingPage(): Promise<any> {
  const hasContentfulConfig = import.meta.env.CONTENTFUL_SPACE_ID && import.meta.env.CONTENTFUL_ACCESS_TOKEN;

  if (!hasContentfulConfig) {
    console.log("Contentful no configurado, usando datos locales");
    return siteLocal;
  }

  try {   
    const response = await contentfulClient.getEntries({
      content_type: "landing-content",
      limit: 1,
    });

    if (!response.items || response.items.length === 0) {
      console.log(`⚠️ No se encontraron entradas de "landing-content" en Contentful, usando datos locales`);
      return siteLocal;
    }

    const landingPageData = response.items[0].fields;
    console.log("Datos obtenidos exitosamente de Contentful");
    
    return landingPageData;
  } catch (error: any) {
    console.error("Error al consultar Contentful:", error.message);
    return siteLocal;
  }
}
