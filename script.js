document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // DICIONÁRIO COMPLETO DE TRADUÇÕES (PT, EN, ES) - SITE INTEIRO MÚTABEL
    // =========================================================================
    const translations = {
        pt: {
            "nav-services": "Serviços",
            "nav-tech": "Tecnologia",
            "nav-demo": "Análise & Demo",
            "nav-apps": "Aplicações",
            "nav-pipeline": "Esteira",
            "nav-faq": "FAQ",
            "nav-cta": "CONTATO",
            "hero-kicker": "// desenvolvimento web estruturado · sistemas sob medida · engenharia de deploy",
            "hero-title": "Transformamos processos empresariais em <em>sistemas próprios</em>.",
            "hero-subtitle": "Elimine planilhas, tarefas manuais e operações desorganizadas. Desenvolvemos sistemas personalizados que centralizam informações, automatizam processos e dão total controlo sobre a sua empresa.",
            "metric-1-val": "-80%", "metric-1-lbl": "Retrabalho",
            "metric-2-val": "+", "metric-2-lbl": "Produtividade",
            "metric-3-val": "100%", "metric-3-lbl": "Operação integrada",
            "btn-hero-primary": "Solicitar Diagnóstico Gratuito",
            "btn-hero-secondary": "Ver Serviços",
            "terminal-title": "tzori — build & deploy status",
            "terminal-key1": "módulos", "terminal-line1": " ✓ Ponto, Alojamento & Stock integrados",
            "terminal-key2": "analytics", "terminal-line2": " ✓ Gráficos consolidados & Planilhas sincronizadas",
            "terminal-key3": "status", "terminal-line3": " ✓ PROJETO ONLINE (Legacy Code Corrigido com Sucesso)",
            "services-tag": "Engenharia de Ponta",
            "services-title": "Transformamos a forma como sua empresa opera",
            "services-desc": "Infraestruturas robustas que não caem, não travam e escalam conforme a sua empresa grows.",
            "service1-title": "Digitalização e Automação de Processos",
            "service1-desc": "Mapeamos os processos da sua empresa e transformamos tarefas manuais, planilhas dispersas e controles paralelos em um sistema centralizado, seguro e totalmente personalizado.",
            "service1-f1": "Automação de tarefas repetitivas", "service1-f2": "Centralização de informações", "service1-f3": "Redução de erros operacionais", "service1-f4": "Controle em tempo real",
            "service2-title": "Evolução de Sistemas Existentes",
            "service2-desc": "Corrigimos gargalos, eliminamos limitações e evoluímos sistemas já existentes para acompanhar o crescimento da sua operação.",
            "service2-f1": "Melhoria de desempenho", "service2-f2": "Novas funcionalidades", "service2-f3": "Integrações com outros sistemas", "service2-f4": "Escalabilidade operacional",
            "pos-tag": "NOSSO FOCO", "pos-title": "Não vendemos software.",
            "pos-desc": "Vendemos controle, produtividade e escalabilidade. O software é apenas a ferramenta que utilizamos para transformar processos empresariais em operações mais rápidas, organizadas e lucrativas.",
            "cases-header-tag": "Processos que transformamos em sistemas próprios", "cases-header-title": "Cada sistema nasce de um desafio operacional real.",
            "case1-num": "PROJETO 01 // OPERAÇÕES DE CAMPO", "case1-title": "GESTÃO DE OBRAS PRO", "case1-desc": "Transformamos o controlo de equipas, alojamentos, materiais e produtividade num único sistema corporativo de alta performance.",
            "case-before": "Antes", "case-after": "Depois",
            "case1-b1": "Planilhas dispersas", "case1-b2": "Grupos de WhatsApp", "case1-b3": "Controle estritamente manual", "case1-b4": "Falta Crítica de informação",
            "case1-a1": "Sistema único centralizado", "case1-a2": "Dados de campo em tempo real", "case1-a3": "Controle total da operação", "case1-a4": "Indicadores executivos automáticos",
            "case1-meta1": "Módulos: Colaboradores · Alojamentos · Estoque · Ponto · Relatórios", "case-secure": "🔒 Projeto de infraestrutura privada",
            "case2-num": "PROJETO 02 // SUPPLY CHAIN", "case2-title": "CONTROLO DE STOCK INTELIGENTE", "case2-desc": "Entradas, saídas, inventário rotativo e rastreabilidade total de ativos centralizados numa única plataforma automatizada.",
            "case2-b1": "Furos frequentes de estoque", "case2-b2": "Atraso na conferência de carga", "case2-b3": "Falta de histórico de movimentação",
            "case2-a1": "Previsibilidade de estoque", "case2-a2": "Rastreabilidade via fluxo digital", "case2-a3": "Alertas automatizados de reposição",
            "case2-meta1": "Módulos: Inventário · Logística Reversa · Alertas Inteligentes",
            "case3-num": "PROJECT 03 // ECOSSISTEMA SOLIDÁRIO & INFRAESTRUTURA",
            "case3-title": "NGO INSTITUTIONAL PORTAL", "case3-desc": "Migration, redesign, and managed hosting with resilience against sudden traffic spikes during national campaigns.",
            "case3-b1": "Site antigo frequentemente fora do ar por sobrecarga", "case3-b2": "Zero otimização no Google", "case3-b3": "Painel de postagens complexo e lento",
            "case3-a1": "Hospedagem em cluster elástico com Cloudflare Enterprise CDN", "case3-a2": "Core Web Vitals pontuação 100/100 no Google Lighthouse", "case3-a3": "CMS headless sob medida para publicação instantânea",
            "case3-meta1": "Serviço: Hospedagem Gerenciada · Alta Disponibilidade · SEO Avançado · Headless CMS",
            "pillars-header-tag": "Padrão de Engenharia", "pillars-header-title": "Nossos 3 Pilares Fundamentais",
            "pillar1-title": "Automação Inteligente", "pillar1-desc": "Eliminamos tarefas repetitivas e reduzimos o esforço operacional da equipa.",
            "pillar2-title": "Informação Centralizada", "pillar2-desc": "Todos os dados da empresa organizados num único local.",
            "pillar3-title": "Preparado para Crescer", "pillar3-desc": "Sistemas preparados para acompanhar a evolução da empresa sem criar novos gargalos.",
            "demo-title": "Receba um Diagnóstico Operacional Gratuito", "demo-desc": "Analisamos os processos da sua empresa e identificamos oportunidades de automação, redução de custos e ganho de produtividade.",
            "demo-b1-title": "1. O que nós analisamos?", "demo-b1-desc": "Fluxos internos, tarefas manuais, controles paralelos, gargalos operacionais e desperdício de tempo.",
            "demo-b2-title": "2. O que você recebe?", "demo-b2-desc": "Um plano prático mostrando quais processos podem ser transformados em um sistema próprio e qual o impacto esperado.",
            "demo-btn": "Solicitar Auditoria Gratuita",
            "apps-tag": "Aplicações Reais", "apps-title": "Processos que já transformamos em sistemas próprios",
            "apps-s1-title": "Logística e Operações de Campo", "apps-s1-desc": "Rastreamento de frotas, controle rígido de estoques inteligentes e painéis para monitoramento em tempo real de equipes de rua.",
            "apps-s2-title": "Fintechs e Plataformas Financeiras", "apps-s2-desc": "Integrações complexas de meios de pagamento, conciliação bancária automatizada e dashboards de auditoria transacional.",
            "apps-s3-title": "SaaS e Softwares Corporativos", "apps-s3-desc": "Transformação de ideias de negócios em produtos digitais escaláveis e prontos para serem comercializados no mercado corporativo.",
            "growth-tag": "Metodologia Ágil", "growth-title": "Como transformamos operações em sistemas",
            "growth-c1-tag": "// IMERSÃO TÉCNICA", "growth-c1-title": "Mapeamento de Regras", "growth-c1-desc": "Nenhum código é escrito antes de entendermos de ponta a ponta a rotina e os desafios reais da sua operação de negócios.",
            "growth-c2-tag": "// DEPLOYS CONSTANTES", "growth-c2-title": "Entregas Semanais", "growth-c2-desc": "Você não fica meses esperando para ver o sistema. Semanalmente liberamos uma versão funcional em ambiente de testes para acompanhamento.",
            "growth-c3-tag": "// SUPORTE DE ENGENHARIA", "growth-c3-title": "Acompanhamento Ativo", "growth-c3-desc": "Após o lançamento, nossa equipe monitora os servidores de perto para garantir que o sistema se comporte perfeitamente sob estresse de acessos.",
            "faq-tag": "Esclarecimentos", "faq-title": "Perguntas Frequentes",
            "faq1-q": "Vocês dão manutenção em sistemas que não foram feitos por vocês?", "faq1-a": "Sim. Fazemos um diagnóstico técnico inicial para entender o estado do código atual, mapear problemas latentes e propor um plano estruturado de estabilização e melhorias contínuas.",
            "faq2-q": "O código-fonte do sistema desenvolvido passa a ser da minha empresa?", "faq2-a": "Com certeza. Contratualmente, após a quitação das etapas do projeto, a propriedade intelectual e todo o código-fonte desenvolvido passam a ser 100% da sua empresa, sem amarras operacionais.",
            "faq3-q": "Como funciona a hospedagem e a infraestrutura dos servidores?", "faq3-a": "Nós estruturamos toda a arquitetura de servidores em nuvem em contas de propriedade da sua própria empresa. Deixamos tudo automatizado e configurado, gerando economia e autonomia total.",
            "cta-title": "Pare de adiar a estabilidade da sua <span>infraestrutura digital</span>.", "cta-desc": "Clique no botão abaixo para agendar uma conversa direta com um engenheiro de software. Sem intermediários comerciais, vamos direto ao ponto técnico do seu desafio.", "cta-btn": "Iniciar Conversa no WhatsApp",
            "disclaimer": "AVISO: A TZORI É UMA AGÊNCIA DE ENGENHARIA DE SOFTWARE INDEPENDENTE E ATUA SOB CONTRATOS E DIRETRIZES DE ACORDO DE NÍVEL DE SERVIÇO (SLA) E ACORDOS DE CONFIDENCIALIDADE (NDA) RÍGIDOS DE MERCADO COM SEUS PARCEIROS.",
            "footer-link-demo": "Análise", "footer-link-contact": "Contato", "footer-proj-title": "// PROJETOS ATIVOS:",
            "footer-p1": "Gestão de Obras Pro", "footer-p2": "Controlo de Stock Automatizado", "footer-p3": "Portal de Ponto Eletrónico", "footer-p4": "Dashboard Analytics BI",
            "footer-copy": "© 2026 TZORI — Transformação Digital e Sistemas Empresariais. <br> Todos os direitos reservados."
        },
        en: {
            "nav-services": "Services", "nav-tech": "Technology", "nav-demo": "Analysis & Demo", "nav-apps": "Applications", "nav-pipeline": "Pipeline", "nav-faq": "FAQ", "nav-cta": "CONTACT",
            "hero-kicker": "// structured web development · custom systems · deploy engineering",
            "hero-title": "We transform business processes into <em>proprietary systems</em>.",
            "hero-subtitle": "Eliminate spreadsheets, manual tasks and unorganized operations. We develop custom software that centralizes information, automates processes and gives you total control.",
            "metric-1-val": "-80%", "metric-1-lbl": "Rework", "metric-2-val": "+", "metric-2-lbl": "Productivity", "metric-3-val": "100%", "metric-3-lbl": "Integrated operation",
            "btn-hero-primary": "Request Free Diagnosis", "btn-hero-secondary": "View Services",
            "terminal-title": "tzori — build & deploy status", "terminal-key1": "modules", "terminal-line1": " ✓ Integrated Time Tracking, Housing & Stock", "terminal-key2": "analytics", "terminal-line2": " ✓ Consolidated Charts & Synced Spreadsheets", "terminal-key3": "status", "terminal-line3": " ✓ PROJECT ONLINE (Legacy Code Successfully Fixed)",
            "services-tag": "Cutting-edge Engineering", "services-title": "Transforming the way your business operates", "services-desc": "Robust infrastructures that don't drop, don't freeze, and scale as your company grows.",
            "service1-title": "Digitalization and Process Automation", "service1-desc": "We map your company's processes and transform manual tasks, scattered spreadsheets, and parallel controls into a centralized, secure, and fully customized system.",
            "service1-f1": "Automation of repetitive tasks", "service1-f2": "Centralization of information", "service1-f3": "Reduction of operational errors", "service1-f4": "Real-time control",
            "service2-title": "Evolution of Existing Systems", "service2-desc": "We fix bottlenecks, eliminate limitations, and evolve existing systems to match your operational growth.",
            "service2-f1": "Performance improvement", "service2-f2": "New functionalities", "service2-f3": "Integrations with other systems", "service2-f4": "Operational scalability",
            "pos-tag": "OUR FOCUS", "pos-title": "We don't sell software.", "pos-desc": "We sell control, productivity, and scalability. <br>Software is just the tool we use to transform business processes into faster, organized, and profitable operations.",
            "cases-header-tag": "Processes we transform into proprietary systems", "cases-header-title": "Every system is born from a real operational challenge.",
            "case1-num": "PROJECT 01 // FIELD OPERATIONS", "case1-title": "FIELD MANAGEMENT PRO", "case1-desc": "We transform the control of teams, housing, materials, and productivity into a single high-performance corporate system.",
            "case-before": "Before", "case-after": "After",
            "case1-b1": "Scattered spreadsheets", "case1-b2": "WhatsApp groups", "case1-b3": "Strictly manual control", "case1-b4": "Critical lack of info",
            "case1-a1": "Single centralized system", "case1-a2": "Real-time field data", "case1-a3": "Full operational control", "case1-a4": "Automated executive indicators",
            "case1-meta1": "Modules: Employees · Housing · Stock · Attendance · Reports", "case-secure": "🔒 Private infrastructure project",
            "case2-num": "PROJECT 02 // SUPPLY CHAIN", "case2-title": "INTELLIGENT STOCK CONTROL", "case2-desc": "Inputs, outputs, rotating inventory, and full asset traceability centralized in a single automated platform.",
            "case2-b1": "Frequent stock gaps", "case2-b2": "Cargo verification delays", "case2-b3": "Lack of movement history",
            "case2-a1": "Stock predictability", "case2-a2": "Traceability via digital flow", "case2-a3": "Automated replenishment alerts",
            "case2-meta1": "Modules: Inventory · Reverse Logistics · Smart Alerts",
            "case3-num": "PROJECT 03 // SOLIDARY ECOSYSTEM & INFRASTRUCTURE", "case3-title": "NGO INSTITUTIONAL PORTAL", "case3-desc": "Migration, redesign, and managed hosting with resilience against sudden traffic spikes during national campaigns.",
            "case3-b1": "Old site frequently down due to overload", "case3-b2": "Zero optimization on Google", "case3-b3": "Complex and slow posting panel",
            "case3-a1": "Hosting on elastic cluster with Cloudflare Enterprise CDN", "case3-a2": "Core Web Vitals score 100/100 on Google Lighthouse", "case3-a3": "Custom headless CMS for instant publishing",
            "case3-meta1": "Service: Managed Hosting · High Availability · Advanced SEO · Headless CMS",            
            "pillars-header-tag": "Engineering Standard", "pillars-header-title": "Our 3 Fundamental Pillars",
            "pillar1-title": "Intelligent Automation", "pillar1-desc": "We eliminate repetitive tasks and reduce the team's operational effort.",
            "pillar2-title": "Centralized Information", "pillar2-desc": "All company data organized in a single place.",
            "pillar3-title": "Ready to Grow", "pillar3-desc": "Systems prepared to accompany company evolution without creating new bottlenecks.",
            "demo-title": "Receive a Free Operational Diagnosis", "demo-desc": "We analyze your company's processes and identify opportunities for automation, cost reduction, and productivity gains.",
            "demo-b1-title": "1. What do we analyze?", "demo-b1-desc": "Internal flows, manual tasks, parallel controls, operational bottlenecks, and wasted time.",
            "demo-b2-title": "2. What do you receive?", "demo-b2-desc": "A practical plan showing which processes can be transformed into a custom system and the expected impact.",
            "demo-btn": "Request Free Audit",
            "apps-tag": "Real Applications", "apps-title": "Processes we have already transformed into custom systems",
            "apps-s1-title": "Logistics and Field Operations", "apps-s1-desc": "Fleet tracking, strict smart inventory control, and dashboards for real-time monitoring of field teams.",
            "apps-s2-title": "Fintechs and Financial Platforms", "apps-s2-desc": "Complex integrations of payment methods, automated bank reconciliation, and transactional audit dashboards.",
            "apps-s3-title": "SaaS and Corporate Software", "apps-s3-desc": "Transformation of business ideas into scalable digital products ready to be commercialized in the corporate market.",
            "growth-tag": "Agile Methodology", "growth-title": "How we transform operations into systems",
            "growth-c1-tag": "// TECHNICAL IMMERSION", "growth-c1-title": "Rules Mapping", "growth-c1-desc": "No code is written before we understand your business operations routine and real challenges inside out.",
            "growth-c2-tag": "// CONSTANT DEPLOYS", "growth-c2-title": "Weekly Deliveries", "growth-c2-desc": "You don't wait months to see the system. Every week we release a functional version in a test environment for tracking.",
            "growth-c3-tag": "// ENGINEERING SUPPORT", "growth-c3-title": "Active Monitoring", "growth-c3-desc": "After launch, our team monitors servers closely to ensure the system behaves perfectly under heavy access traffic.",
            "faq-tag": "Clarifications", "faq-title": "Frequently Asked Questions",
            "faq1-q": "Do you maintain systems that were not built by you?", "faq1-a": "Yes. We perform an initial technical diagnosis to understand the current code state, map latent issues, and propose a structured stabilization and continuous improvement plan.",
            "faq2-q": "Does the developed system source code belong to my company?", "faq2-a": "Absolutely. Contractually, after project stages are settled, the intellectual property and all developed source code belong 100% to your company.",
            "faq3-q": "How do hosting and server infrastructure work?", "faq3-a": "We structure the entire cloud server architecture in accounts owned by your own company, providing total economy and autonomy.",
            "cta-title": "Stop postponing the stability of your <span>digital infrastructure</span>.", "cta-desc": "Click the button below to schedule a direct conversation with a software engineer. No sales middlemen, straight to the point.", "cta-btn": "Start Conversation on WhatsApp",
            "disclaimer": "NOTICE: TZORI IS AN INDEPENDENT SOFTWARE ENGINEERING AGENCY AND OPERATES UNDER STRICT MARKET SERVICE LEVEL AGREEMENTS (SLA) AND NON-DISCLOSURE AGREEMENTS (NDA).",
            "footer-link-demo": "Analysis", "footer-link-contact": "Contact", "footer-proj-title": "// ACTIVE PROJECTS:",
            "footer-p1": "Field Management Pro", "footer-p2": "Automated Stock Control", "footer-p3": "Electronic Attendance Portal", "footer-p4": "BI Analytics Dashboard",
            "footer-copy": "© 2026 TZORI — Digital Transformation & Business Systems. <br> All rights reserved."
        },
        es: {
            "nav-services": "Servicios", "nav-tech": "Tecnología", "nav-demo": "Análisis & Demo", "nav-apps": "Aplicaciones", "nav-pipeline": "Línea", "nav-faq": "FAQ", "nav-cta": "CONTACTO",
            "hero-kicker": "// desarrollo web estructurado · sistemas a medida · ingeniería de despliegue",
            "hero-title": "Transformamos procesos empresariales en <em>sistemas propios</em>.",
            "hero-subtitle": "Elimine planillas y tareas manuales. Desarrollamos software a medida que centraliza información, automatiza procesos y le da control total.",
            "metric-1-val": "-80%", "metric-1-lbl": "Retrabajo", "metric-2-val": "+", "metric-2-lbl": "Productividad", "metric-3-val": "100%", "metric-3-lbl": "Operación integrada",
            "btn-hero-primary": "Solicitar Diagnóstico Gratis", "btn-hero-secondary": "Ver Servicios",
            "terminal-title": "tzori — build & deploy status", "terminal-key1": "módulos", "terminal-line1": " ✓ Módulos integrados de asistencia y stock", "terminal-key2": "analytics", "terminal-line2": " ✓ Gráficos consolidados y planillas sincronizadas", "terminal-key3": "status", "terminal-line3": " ✓ PROJETO ONLINE (Código heredado corregido con éxito)",
            "services-tag": "Ingeniería de Vanguardia", "services-title": "Transformamos la forma de operar", "services-desc": "Infraestructuras robustas que não caem, não se congelan y escalan a medida que crece su empresa.",
            "service1-title": "Digitalización y Automatización de Processos", "service1-desc": "Mapeamos los procesos de su empresa y transformamos tareas manuales, planillas dispersas y controles paralelos en un sistema centralizado, seguro y totalmente personalizado.",
            "service1-f1": "Automatización de tareas repetitivas", "service1-f2": "Centralización de información", "service1-f3": "Reducción de errores operativos", "service1-f4": "Control en tiempo real",
            "service2-title": "Evolución de Sistemas Existentes", "service2-desc": "Corregimos cuellos de botella, eliminamos limitaciones y evolucionamos sistemas existentes para acompañar el crecimiento de su operación.",
            "service2-f1": "Mejora de rendimiento", "service2-f2": "Nuevas funcionalidades", "service2-f3": "Integraciones con otros sistemas", "service2-f4": "Escalabilidad operacional",
            "pos-tag": "NUESTRO ENFOQUE", "pos-title": "No vendemos software.", "pos-desc": "Vendemos control, productividad y escalabilidad. <br>El software es solo la herramienta que utilizamos para transformar procesos en operaciones más rápidas y rentables.",
            "cases-header-tag": "Procesos que transformamos en sistemas propios", "cases-header-title": "Cada sistema nace de un desafío operativo real.",
            "case1-num": "PROYECTO 01 // OPERACIONES DE CAMPO", "case1-title": "GESTIÓN DE OBRAS PRO", "case1-desc": "Transformamos el control de equipos, alojamientos, materiales y productividad en un único sistema corporativo de alto rendimiento.",
            "case-before": "Antes", "case-after": "Después",
            "case1-b1": "Planillas dispersas", "case1-b2": "Grupos de WhatsApp", "case1-b3": "Control estrictamente manual", "case1-b4": "Falta crítica de información",
            "case1-a1": "Sistema único centralizado", "case1-a2": "Datos de campo en tiempo real", "case1-a3": "Control total de la operación", "case1-a4": "Indicadores ejecutivos automáticos",
            "case1-meta1": "Módulos: Colaboradores · Alojamientos · Stock · Asistencia · Reportes", "case-secure": "🔒 Proyecto de infraestructura privada",
            "case2-num": "PROYECTO 02 // SUPPLY CHAIN", "case2-title": "CONTROL DE STOCK INTELIGENTE", "case2-desc": "Entradas, salidas, inventario rotativo y trazabilidad total de activos centralizados en una plataforma automatizada.",
            "case2-b1": "Fallas frecuentes de stock", "case2-b2": "Demora en verificación de carga", "case2-b3": "Falta de historial de movimientos",
            "case2-a1": "Previsibilidad de stock", "case2-a2": "Trazabilidad vía flujo digital", "case2-a3": "Alertas automáticas de reposición",
            "case2-meta1": "Módulos: Inventario · Logística Reversa · Alertas Inteligentes",
            "case3-num": "PROYECTO 03 // ECOSISTEMA SOLIDARIO & INFRAESTRUCTURA", "case3-title": "PORTAL INSTITUCIONAL ONG", "case3-desc": "Migración, rediseño y hosting gestionado con resiliencia ante picos de tráfico repentinos durante campañas nacionales.",
            "case3-b1": "Sitio antiguo frecuentemente caído por sobrecarga", "case3-b2": "Cero optimización en Google", "case3-b3": "Panel de publicaciones complejo y lento",
            "case3-a1": "Hospedaje en cluster elástico con Cloudflare Enterprise CDN", "case3-a2": "Puntuación Core Web Vitals 100/100 en Google Lighthouse", "case3-a3": "CMS headless a medida para publicación instantánea",
            "case3-meta1": "Servicio: Hosting Gestionado · Alta Disponibilidad · SEO Avanzado · CMS Headless",
            "pillars-header-tag": "Estándar de Ingeniería", "pillars-header-title": "Nuestros 3 Pilares Fundamentales",
            "pillar1-title": "Automatización Inteligente", "pillar1-desc": "Eliminamos tareas repetitivas y reducimos el esfuerzo operativo del equipo.",
            "pillar2-title": "Información Centralizada", "pillar2-desc": "Todos los datos de la empresa organizados en un solo lugar.",
            "pillar3-title": "Listo para Crecer", "pillar3-desc": "Sistemas preparados para acompañar la evolución de la empresa sin crear nuevos cuellos de botella.",
            "demo-title": "Reciba un Diagnóstico Operativo Gratis", "demo-desc": "Analizamos los procesos de su empresa e identificamos oportunidades de automatización, reducción de costos y ganancia de productividad.",
            "demo-b1-title": "1. ¿Qué analizamos?", "demo-b1-desc": "Flujos internos, tareas manuales, controles paralelos, cuellos de botella operativos y pérdida de tiempo.",
            "demo-b2-title": "2. ¿Qué recibe?", "demo-b2-desc": "Un plan práctico que muestra qué procesos pueden transformarse en un sistema propio y el impacto esperado.",
            "demo-btn": "Solicitar Auditoría Gratis",
            "apps-tag": "Aplicaciones Reales", "apps-title": "Procesos que ya transformamos en sistemas propios",
            "apps-s1-title": "Logística y Operaciones de Campo", "apps-s1-desc": "Rastreo de flotas, control estricto de stock inteligente y paneles para monitoreo en tiempo real de equipos.",
            "apps-s2-title": "Fintechs y Plataformas Financieras", "apps-s2-desc": "Integraciones complejas de medios de pago, conciliación bancaria automatizada y dashboards de auditoría transaccional.",
            "apps-s3-title": "SaaS y Softwares Corporativos", "apps-s3-desc": "Transformación de ideas de negocio en productos digitales escalables y listos para el mercado corporativo.",
            "growth-tag": "Metodología Ágil", "growth-title": "Cómo transformamos operaciones en sistemas",
            "growth-c1-tag": "// INMERSIÓN TÉCNICA", "growth-c1-title": "Mapeo de Reglas", "growth-c1-desc": "No se escribe código antes de entender a fondo la rutina y los desafíos reales de su operación.",
            "growth-c2-tag": "// DESPLIEGUES CONSTANTES", "growth-c2-title": "Entregas Semanales", "growth-c2-desc": "No espera meses para ver el sistema. Semanalmente liberamos una versión funcional en entorno de pruebas.",
            "growth-c3-tag": "// SOPORTE DE INGENIERÍA", "growth-c3-title": "Monitoreo Activo", "growth-c3-desc": "Tras el lanzamiento, monitoreamos los servidores de cerca para garantizar estabilidad bajo estrés de accesos.",
            "faq-tag": "Aclaraciones", "faq-title": "Preguntas Frecuentes",
            "faq1-q": "¿Dan mantenimiento a sistemas que no fueron hechos por ustedes?", "faq1-a": "Sí. Hacemos un diagnóstico técnico inicial para entender el estado del código actual, mapear problemas latentes y proponer un plan estructurado.",
            "faq2-q": "¿El código fuente del sistema desarrollado pasa a ser de mi empresa?", "faq2-a": "Por supuesto. Contractualmente, tras finalizar las etapas del proyecto, la propiedad intelectual y todo el código pertenecen 100% a su empresa.",
            "faq3-q": "¿Cómo funciona el hospedaje y la infraestructura de servidores?", "faq3-a": "Estructuramos la arquitectura en la nube en cuentas de propiedad de su empresa, generando ahorro y autonomía total.",
            "cta-title": "Deje de posponer la estabilidad de su <span>infraestructura digital</span>.", "cta-desc": "Haga clic abajo para agendar una charla directa con un ingeniero de software. Sin intermediarios comerciales.", "cta-btn": "Iniciar Conversación en WhatsApp",
            "disclaimer": "AVISO: TZORI ES UNA AGENCIA DE INGENIERÍA DE SOFTWARE INDEPENDIENTE Y ACTÚA BAJO CONTRATOS ESTRICTOS DE ACUERDO DE NIVEL DE SERVICIO (SLA) Y ACUERDOS DE CONFIDENCIALIDAD (NDA).",
            "footer-link-demo": "Análisis", "footer-link-contact": "Contacto", "footer-proj-title": "// PROYECTOS ACTIVOS:",
            "footer-p1": "Gestión de Obras Pro", "footer-p2": "Control de Stock Automatizado", "footer-p3": "Portal de Asistencia Electrónica", "footer-p4": "Dashboard Analytics BI",
            "footer-copy": "© 2026 TZORI — Transformación Digital y Sistemas Empresariales. <br> Todos os derechos reservados."
        }
    };

    // =========================================================================
    // FUNÇÃO DINÂMICA DE TRADUÇÃO DO DOM (PRESERVA TODAS AS INTERAÇÕES NATIIVAS)
    // =========================================================================
    function updateDOM(lang) {
        const langLower = lang.toLowerCase();
        if (!translations[langLower]) return;

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[langLower][key]) {
                // Se contiver elementos HTML (ex: <em>, 🔒, <span>, <br>), insere via innerHTML
                if (translations[langLower][key].includes('<') || translations[langLower][key].includes('>') || translations[langLower][key].includes('🔒')) {
                    element.innerHTML = translations[langLower][key];
                } else {
                    element.textContent = translations[langLower][key];
                }
            }
        });

        document.documentElement.lang = langLower;
    }

    // =========================================================================
    // CONTROLE INTEGRADO DO DROPDOWN (100% FIEL À INTERAÇÃO ORIGINAL)
    // =========================================================================
    const dropdownContainer = document.getElementById('langDropdown');
    
    if (dropdownContainer) {
        const dropdownBtn = dropdownContainer.querySelector('.lang-text-btn');
        const activeLangSpan = document.getElementById('activeLang');
        const dropdownItems = dropdownContainer.querySelectorAll('.dropdown-item');

        // 1. Abre e fecha o menu ao clicar no botão principal (Adiciona classe CSS nativa)
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownContainer.classList.toggle('show');
        });

        // 2. Trata a seleção do novo idioma e dispara a tradução simultaneamente
        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const selectedLang = item.getAttribute('data-lang'); // Pega o valor (PT, EN, ES)
                
                // Atualiza o texto visual do botão principal
                activeLangSpan.textContent = selectedLang;
                
                // Gerencia classes de estado ativo
                dropdownItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                // Fecha o dropdown de forma suave
                dropdownContainer.classList.remove('show');

                // Dispara a tradução mapeando o idioma em minúsculo para a chave do dicionário
                updateDOM(selectedLang.toLowerCase());
                console.log(`Idioma alterado para: ${selectedLang}`);
            });
        });

        // 3. Fecha o menu se clicar em qualquer outro lugar da tela
        document.addEventListener('click', () => {
            dropdownContainer.classList.remove('show');
        });
    }
});