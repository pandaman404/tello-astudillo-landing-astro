import { contentfulClient } from "@/lib/contentful";
import siteLocal from "@/content/site.json";

/**
 * Obtiene la landing page desde Contentful
 * Si falla, retorna los datos locales del JSON
 */
export async function getLandingPage(): Promise<any> {
  const hasContentfulConfig = import.meta.env.CONTENTFUL_SPACE_ID && import.meta.env.CONTENTFUL_ACCESS_TOKEN;

  if (!hasContentfulConfig) {
    console.log("⚠️ Contentful no configurado, usando datos locales");
    return { images: siteLocal.images, siteConfig: siteLocal.siteConfig };
  }

  try {
    console.log("🔗 Consultando Contentful...");
    
    const response = await contentfulClient.getEntries({
      content_type: "landingContent",
      limit: 1,
    });

    console.log("📦 Respuesta de Contentful:", JSON.stringify(response, null, 2));

    if (!response.items || response.items.length === 0) {
      console.log(`⚠️ No se encontraron entradas de "landingContent" en Contentful, usando datos locales`);
      return { images: siteLocal.images, siteConfig: siteLocal.siteConfig };
    }

    const landingPageData = response.items[0].fields;
    console.log("✅ Datos obtenidos exitosamente de Contentful");
    
    return landingPageData;
  } catch (error: any) {
    console.error("❌ Error al consultar Contentful:", error.message);
    console.log("💡 Verifica que el content_type exista en tu espacio de Contentful");
    console.log("📦 Usando fallback: datos locales");
    return { images: siteLocal.images, siteConfig: siteLocal.siteConfig };
  }
}

/**
 * Obtiene solo siteConfig desde Contentful o JSON local
 */
export async function getSiteConfig(): Promise<any> {
  const landingPage = await getLandingPage();
  // siteConfig en Contentful tiene estructura anidada: siteConfig.siteConfig
  return landingPage.siteConfig?.siteConfig || landingPage.siteConfig;
}

/**
 * Obtiene las imágenes desde Contentful o JSON local
 */
export async function getImages(): Promise<any> {
  const landingPage = await getLandingPage();
  return landingPage.images || {};
}
