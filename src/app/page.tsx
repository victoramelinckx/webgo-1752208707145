
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Digitaliza tu negocio hoy con nuestra web instantánea y soporte 24/7, sin complicaciones." cta1="Empieza Ahora" />
<How step1Title="Comparte tu visión" step1Desc="Cuéntanos sobre tu negocio y metas." step2Title="Creación exprés" step2Desc="Tu web lista para vender online en 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para maximizar tus ventas." />
<Aboutus headline="WebGo: Digitaliza y Crece Rápido" subheadline="WebGo transforma ventas, gestionando tu sitio web sin complicaciones." beneficiotitulo1="Sin Estrés" beneficio1="Gestionamos todo, tú relájate." beneficiotitulo2="Aumenta Ventas" beneficio2="Conecta clientes, crece tu negocio." />
<Services heading="Lleva Tu Negocio Al Mundo Digital" description="Convertimos recomendaciones en ventas online instantáneamente." services={[{"name":"Desarrollo Web Rápido","icon":"bolt","description":"Tu web de ventas en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headphones","description":"Asistencia técnica cuando la necesites."},{"name":"Optimización SEO","icon":"search","description":"Aumenta visibilidad con [producto] y WebGo."},{"name":"Gestión de Contenido","icon":"file-alt","description":"Contenido atractivo, sin esfuerzo."},{"name":"Estrategia de Marketing","icon":"chart-line","description":"Convierte tráfico en clientes."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita transacciones seguras online."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en sitios web que cautivan y convierten." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio si solo vendo por recomendación?","respuesta":"WebGo te ayuda a crear una presencia online efectiva para que puedas atraer más clientes. Diseñamos y gestionamos tu sitio web, optimizado para captar la atención de nuevos compradores. Así puedes expandir tus ventas más allá de las recomendaciones."},{"pregunta":"¿Qué beneficios obtengo al tener un sitio web gestionado por WebGo?","respuesta":"Con WebGo, obtienes un sitio web profesional que funciona 24/7, atrayendo clientes y generando ventas mientras te enfocas en lo que mejor sabes hacer. No necesitas preocuparte por la gestión técnica ni el mantenimiento, nosotros nos encargamos de todo."},{"pregunta":"No tengo tiempo para gestionar un sitio web. ¿WebGo puede encargarse de todo?","respuesta":"Sí, en WebGo nos encargamos de todo. Desde el diseño hasta el mantenimiento y la optimización para motores de búsqueda. Tú solo te preocupas por atender a tus clientes, nosotros hacemos el resto para que tus ventas online crezcan."},{"pregunta":"¿Cómo genera WebGo más ventas para mi pequeño negocio?","respuesta":"WebGo optimiza tu sitio web para atraer clientes potenciales a través de estrategias SEO efectivas. Esto aumenta la visibilidad de tu negocio online, lo que se traduce en más visitas y, por ende, más ventas."},{"pregunta":"¿Qué tan seguro es el sitio web que WebGo diseñará para mi negocio?","respuesta":"La seguridad es nuestra prioridad. En WebGo, implementamos las mejores prácticas de seguridad para proteger tu sitio web y los datos de tus clientes. Así puedes operar con tranquilidad sabiendo que tu negocio está seguro en el mundo digital."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio en Línea Hoy" 
                      description="Descubre cómo WebGo puede digitalizar tus ventas y liberarte del estrés de gestionar tu sitio web. Da el primer paso hacia el éxito online."
                      formPostUrl="api/contact-us"
                      projectId="L4Za4xI58rYJSiGjdM0ruoTcdoH3"
                    />
<Footer />
    </main>
  );
}
