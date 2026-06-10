export async function gerarQuiz(tema) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
                        Crie um quiz com 5 perguntas sobre ${tema}.
                        Cada pergunta deve ter:
                        - question
                        - options (3 alternativas)
                        - answer

                        Responda APENAS em JSON válido.
                        `
                }
              ]
            }
          ]
        })
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.log("Erro da API:", errorText)
      throw new Error(response.status)
    }

    const data = await response.json()

    let text = data.candidates[0].content.parts[0].text

    text = text.replace(/```json/g, "").replace(/```/g, "")

    return JSON.parse(text)

  } catch (error) {
    console.error("Erro ao gerar quiz:", error)
    return []
  }
}