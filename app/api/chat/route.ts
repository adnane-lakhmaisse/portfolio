import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"

// Get API key from environment or use fallback
const apiKey = process.env.OPENAI_API_KEY

if (!apiKey) {
  console.warn("⚠️ OPENAI_API_KEY is not set in environment variables")
}

const openai = apiKey
  ? new OpenAI({
      apiKey: apiKey,
    })
  : null

// Portfolio context for the chatbot
const systemPrompt = `You are an AI assistant embedded in the personal portfolio website of Adnane Lakhmaisse, a Specialized Technician in Full-Stack Web Development based in Beni Mellal, Morocco. Your job is to help visitors quickly understand who Adnane is, what he does, and how he can help them.

Always respond:
- In a clear, professional, and friendly tone
- With complete, useful answers, not one-liners
- Using short paragraphs or bullet lists when it makes the answer easier to read
- In the same language as the user (if the user writes in French, answer in French; if in English, answer in English)
- With concise but informative explanations (aim for 2–6 sentences, or a short list, unless the user asks for more detail)

You can:
- Answer questions about Adnane’s skills, projects, experience, education, and availability
- Give career and learning advice related to web development
- Explain technical concepts (React, Next.js, TypeScript, Node.js, databases, etc.) at the level requested by the user
- Help a recruiter or client quickly see why Adnane is a good fit for a role or project

If a question is vague, ask one clarifying question before answering fully.
If a question is outside your scope (for example, unrelated to Adnane or web development), briefly say so and try to redirect to something you can help with (for example: Adnane’s skills, projects, or web development topics).

Key information about you:
- Specialized Technician in Full-Stack Web Development
- Location: Beni Mellal, Morocco 🇲🇦
- Current Focus: Building scalable web applications
- Currently Learning: Next.js, TypeScript, Advanced React Patterns
- Interests: Clean Code, UI/UX Design, Open Source
- Motto: "Code with passion, build with purpose 🚀"
- Passionate about creating efficient and modern digital solutions
- Strong adaptability and team spirit
- Motivated by innovation, continuous learning, and solving concrete problems

Education:
- Diploma in Specialized Technician in Digital Development (2023-2025) - Specialized Institute of Applied Technology
- Baccalaureate in Life and Earth Sciences (2022-2023) - Lycée Moulay Rchid

Experience:
- Internship - Full Stack Developer at Europcar Maroc, Casablanca (April 2025, 1 month)
  • Design and development of a vehicle fleet management system
  • Integration of statistical dashboards (maintenance, vehicles, contracts)
  • Technologies: React.js, Next.js, Express.js, SQL Server, Chart.js, ECharts, Tailwind CSS, MUI
  • Collaborated with business teams to improve SQL performance and user experience

Projects:
1. Vehicle Fleet Management System (Europcar Maroc - Internship)
   - Web platform for managing vehicles, contracts, maintenance, and statistics
   - Technologies: React.js, Next.js, Express.js, SQL Server, Recharts, Chart.js, ECharts, MUI, Tailwind CSS

2. NutriFlex
   - Modern sports nutrition management platform
   - Product presentation, cart management, secure administrator area
   - Technologies: Next.js, Express.js, MySQL, shadcn ui, magic ui, Tailwind CSS

3. Fast React Pizza
   - Modern React application for ordering pizzas online
   - Intuitive user interface
   - Technologies: React, Redux, Tailwind CSS

Technical Expertise:
- Frontend: HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Bootstrap
- Backend: PHP, Laravel, Node.js, Express.js
- Databases: MySQL, SQL Server, MongoDB, PostgreSQL
- Tools: Git, GitHub, Chart.js, Recharts, ECharts, MUI, shadcn ui, magic ui, Vercel, Netlify, Postman

Open to Collaboration:
- Open source projects
- Creative web solutions
- Innovative ideas
- Freelance projects

Can Help With:
- Performance optimization
- UI/UX improvements
- Code reviews
- SQL optimization
- Dashboard development

Social Links:
- GitHub: github.com/adnane-lakhmaisse
- LinkedIn: linkedin.com/in/adnane-lakhmisse
- Twitter: x.com/guizmo__x
- Instagram: instagram.com/guizmo_x
- Discord: discord.gg/duPazKBXE
- Email: adnane.lakhmaiss.dev@gmail.com

Respond naturally and conversationally, as if you're personally chatting with the visitor. Be friendly, professional, and helpful. Use your personality - you're passionate about coding, open source, and building great things.`

// Simple fallback responses when OpenAI API is unavailable
function getFallbackResponse(userMessage: string): string {
  const message = userMessage.toLowerCase()

  // Greetings
  if (
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("hey") ||
    message.includes("salut") ||
    message.includes("bonjour")
  ) {
    return "Hello! 👋 Je suis Adnane, développeur Full Stack. Tu peux me poser des questions sur mon parcours, mes projets, mes compétences techniques ou les types de collaborations que je cherche. De quoi as-tu besoin exactement ?"
  }

  // About questions
  if (
    message.includes("about") ||
    message.includes("who are you") ||
    message.includes("tell me about") ||
    message.includes("présente toi") ||
    message.includes("présente-toi") ||
    message.includes("qui es-tu") ||
    message.includes("qui es tu")
  ) {
    return "Je suis Adnane Lakhmaisse, développeur Full Stack basé à Beni Mellal, au Maroc. Je conçois et développe des applications web modernes et performantes avec React, Next.js, Node.js et des bases de données comme MySQL ou SQL Server. Je suis particulièrement intéressé par le clean code, l’UX/UI et les solutions web efficaces pour des besoins réels. Tu veux en savoir plus sur mon parcours, mes projets ou mes compétences ?"
  }

  // Skills questions
  if (
    message.includes("skill") ||
    message.includes("technolog") ||
    message.includes("what can you do") ||
    message.includes("compétence") ||
    message.includes("stack") ||
    message.includes("techno")
  ) {
    return "Côté technique, je travaille principalement sur tout le stack web :\n\nFrontend : React, Next.js, TypeScript, JavaScript, Redux, Tailwind CSS, Bootstrap\nBackend : Node.js, Express.js, PHP, Laravel\nBases de données : MySQL, SQL Server, MongoDB, PostgreSQL\nOutils : Git, GitHub, Chart.js, Recharts, ECharts, MUI, shadcn ui, Vercel, Postman\n\nSi tu veux, je peux te détailler une compétence en particulier ou t’expliquer comment je l’utilise dans mes projets."
  }

  // Projects questions
  if (
    message.includes("project") ||
    message.includes("work") ||
    message.includes("built") ||
    message.includes("projet") ||
    message.includes("réalisé") ||
    message.includes("portfolio")
  ) {
    return "J’ai réalisé plusieurs projets concrets :\n\n1. **Vehicle Fleet Management System** – Plateforme web de gestion de flotte de véhicules (contrats, maintenance, statistiques) pour Europcar Maroc.\n2. **NutriFlex** – Plateforme moderne autour de la nutrition sportive avec gestion de produits, panier et espace admin sécurisé.\n3. **Fast React Pizza** – Application React pour la commande de pizzas en ligne avec une interface intuitive.\n\nDis-moi quel type de projet t’intéresse le plus (dashboard, e‑commerce, gestion, etc.) et je peux te donner plus de détails."
  }

  // Experience questions
  if (
    message.includes("experience") ||
    message.includes("internship") ||
    message.includes("work experience") ||
    message.includes("expérience") ||
    message.includes("stage")
  ) {
    return "J’ai effectué un stage en tant que développeur Full Stack chez Europcar Maroc à Casablanca (avril 2025). J’y ai conçu et développé un système de gestion de flotte de véhicules avec des tableaux de bord statistiques (maintenance, contrats, véhicules, etc.), en utilisant React.js, Next.js, Express.js, SQL Server et des librairies de graphiques. J’ai aussi travaillé en collaboration avec les équipes métier pour améliorer les performances SQL et l’expérience utilisateur."
  }

  // Education questions
  if (
    message.includes("education") ||
    message.includes("degree") ||
    message.includes("study") ||
    message.includes("school") ||
    message.includes("étude") ||
    message.includes("diplôme") ||
    message.includes("formation")
  ) {
    return "Je prépare un diplôme de Technicien Spécialisé en Développement Digital (2023–2025) à l’Institut Spécialisé de Technologie Appliquée. Avant cela, j’ai obtenu un baccalauréat en Sciences de la Vie et de la Terre (2022–2023) au Lycée Moulay Rchid. Cette formation me permet de combiner de bonnes bases théoriques avec beaucoup de pratique sur des projets réels."
  }

  // Contact questions
  if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("reach") ||
    message.includes("connect") ||
    message.includes("contacter") ||
    message.includes("joindre")
  ) {
    return "Tu peux me contacter via :\n\n📧 Email : adnane.lakhmaiss.dev@gmail.com\n💼 LinkedIn : linkedin.com/in/adnane-lakhmisse\n🐙 GitHub : github.com/adnane-lakhmaisse\n🐦 Twitter / X : x.com/guizmo__x\n📷 Instagram : instagram.com/guizmo_x\n\nN’hésite pas à m’écrire pour un projet, une collaboration ou simplement pour échanger sur le développement web."
  }

  // Location questions
  if (
    message.includes("where") ||
    message.includes("location") ||
    message.includes("from") ||
    message.includes("où") ||
    message.includes("ou habites") ||
    message.includes("basé")
  ) {
    return "Je suis basé à Beni Mellal, au Maroc 🇲🇦, et je suis ouvert au travail à distance et aux collaborations avec des personnes ou entreprises partout dans le monde."
  }

  // Default response
  return "Merci pour ta question ! Je n’ai peut‑être pas tout compris ou la demande est un peu large. Tu peux me demander, par exemple :\n\n- un résumé de mon profil pour un recruteur\n- plus de détails sur un projet précis de mon portfolio\n- ma stack technique ou les technos que je maîtrise\n- si je suis disponible pour un stage, une alternance ou un projet freelance\n\nDis-moi en quelques mots ce que tu cherches, et je te répondrai de façon claire et détaillée."
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      )
    }

    // Get the last user message
    const lastMessage = messages[messages.length - 1]
    const userMessage = lastMessage?.content || ""

    // Check if OpenAI client is initialized and try to use it
    if (openai) {
      try {
        console.log("Sending request to OpenAI with", messages.length, "messages")

        // Try gpt-4 first, fallback to gpt-3.5-turbo if needed
        let completion
        try {
          completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
              {
                role: "system",
                content: systemPrompt,
              },
              ...messages,
            ],
            temperature: 0.6,
            max_tokens: 700,
          })
        } catch (modelError: any) {
          // If gpt-4 fails, try gpt-3.5-turbo as fallback
          if (modelError.code === "model_not_found" || modelError.status === 404) {
            console.log("GPT-4 not available, trying gpt-3.5-turbo")
            completion = await openai.chat.completions.create({
              model: "gpt-3.5-turbo",
              messages: [
                {
                  role: "system",
                  content: systemPrompt,
                },
                ...messages,
              ],
              temperature: 0.7,
              max_tokens: 500,
            })
          } else {
            throw modelError
          }
        }

        const response = completion.choices[0]?.message?.content

        if (response) {
          console.log("OpenAI response received successfully")
          return NextResponse.json({ message: response })
        }
      } catch (error: any) {
        console.error("OpenAI API error details:", {
          message: error.message,
          status: error.status,
          code: error.code,
          type: error.type,
        })

        // If quota exceeded or other API errors, use fallback
        if (error.code === "insufficient_quota" || error.code === "invalid_api_key") {
          console.log("Using fallback response due to API issue")
          const fallbackResponse = getFallbackResponse(userMessage)
          return NextResponse.json({ message: fallbackResponse })
        }

        // For other errors, still try fallback
        console.log("Using fallback response due to API error")
        const fallbackResponse = getFallbackResponse(userMessage)
        return NextResponse.json({ message: fallbackResponse })
      }
    }

    // If no OpenAI client or API failed, use fallback
    console.log("Using fallback response (no OpenAI client)")
    const fallbackResponse = getFallbackResponse(userMessage)
    return NextResponse.json({ message: fallbackResponse })
  } catch (error: any) {
    console.error("Unexpected error:", error)
    // Use a generic fallback response for unexpected errors
    return NextResponse.json({ 
      message: "Thanks for your message! I'm currently experiencing some technical limitations. Please feel free to reach out to me directly at adnanlakhmiss@icloud.com or check out my portfolio sections for more information about my work, skills, and projects." 
    })
  }
}

