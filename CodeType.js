const codeData = 
{
    CodeToType: 
    [
        {
            code1: `public void TryUntilSuccess(int attempts)
{
    if (attempts == 0)
    {
        Console.WriteLine("Every attempt brings you closer to success.");
        return;
    }
    if (new Random().NextDouble() > 0.7)
    {
        Console.WriteLine("Success is on the horizon!");
    }
    else
    {
        Console.WriteLine("Keep pushing. You're almost there.");
        TryUntilSuccess(attempts - 1);
    }
}
TryUntilSuccess(10);`,

            code2: `public void Climb(int mountainHeight)
{
    if (mountainHeight <= 0)
    {
        Console.WriteLine("The peak is just another step in the journey.");
        return;
    }
    Console.WriteLine("Every step counts: " + mountainHeight + " left.");
    Climb(mountainHeight - 1);
}
Climb(100);`,

            code3: `public void Plant(string seed)
{
    if (string.IsNullOrEmpty(seed))
    {
        Console.WriteLine("From small beginnings come great things.");
        return;
    }
    Console.WriteLine("Cultivating: " + seed);
    Plant(seed.Substring(1));
}
Plant("Determination");`,

            code4: `public void DreamBig(List<string> dreams, List<string> reality)
{
    if (dreams.Count == 0)
    {
        Console.WriteLine("Dreams become reality, one step at a time.");
        return;
    }
    string dream = dreams[0];
    dreams.RemoveAt(0);
    reality.Add(dream);
    Console.WriteLine("Living the dream: " + dream);
    DreamBig(dreams, reality);
}
DreamBig(new List<string> { "Hope", "Faith", "Courage" }, new List<string>());`,

            code5: `public void Journey(int paths, int destination)
{
    if (paths == destination)
    {
        Console.WriteLine("It's about the journey, not the destination.");
        return;
    }
    Console.WriteLine("Every path is a story: " + paths);
    Journey(paths + 1, destination);
}
Journey(1, 10);`,

            code6: `public void CreateArt(List<string> inspiration, string canvas)
{
    if (inspiration.Count == 0)
    {
        Console.WriteLine("Art is an expression of the soul.");
        return;
    }
    string color = inspiration[inspiration.Count - 1];
    inspiration.RemoveAt(inspiration.Count - 1);
    Console.WriteLine("Painting with: " + color);
    CreateArt(inspiration, canvas + color);
}
CreateArt(new List<string> { "Passion", "Emotion", "Vision" }, "");`,

            code7: `public void FaceChallenges(int challengesLeft, int overcome)
{
    if (challengesLeft == 0)
    {
        Console.WriteLine("With every challenge, you become stronger.");
        return;
    }
    Console.WriteLine("Facing challenge: " + challengesLeft);
    FaceChallenges(challengesLeft - 1, overcome + 1);
}
FaceChallenges(5, 0);`,

            code8: `public void GrowKnowledge(List<string> books, string wisdom)
{
    if (books.Count == 0)
    {
        Console.WriteLine("Knowledge is the key to unlocking potential.");
        return;
    }
    string book = books[0];
    books.RemoveAt(0);
    Console.WriteLine("Reading: " + book);
    GrowKnowledge(books, wisdom + book);
}
GrowKnowledge(new List<string> { "Experience", "Understanding", "Insight" }, "");`,

            code9: `public void EmbraceChange(string old, string newBeginnings)
{
    if (string.IsNullOrEmpty(old))
    {
        Console.WriteLine("Change is the only constant.");
        return;
    }
    Console.WriteLine("Out with the old: " + old);
    EmbraceChange(old.Substring(1), newBeginnings + old[0]);
}
EmbraceChange("Past", "");`,

            code10: `public void FindBalance(int yin, int yang)
{
    if (yin == yang)
    {
        Console.WriteLine("Balance is the essence of life.");
        return;
    }
    Console.WriteLine("Balancing: " + yin + " and " + yang);
    FindBalance(yin + 1, yang - 1);
}
FindBalance(5, 15);`
        }
    ]
};
const codeSnippets = Object.values(codeData.CodeToType[0]);

let currentSnippet = getRandomSnippet();
let characterIndex = 0;

function getRandomSnippet() {
  const randomIndex = Math.floor(Math.random() * codeSnippets.length);
  return codeSnippets[randomIndex];
}

function typeCode() {
  if (characterIndex < currentSnippet.length) {
    const currentChar = currentSnippet.charAt(characterIndex);
    const tempOutput =
      document.getElementById("codeOutput").textContent + currentChar;
    document.getElementById("codeOutput").innerHTML = Prism.highlight(
      tempOutput,
      Prism.languages.csharp,
      "csharp"
    );
    characterIndex++;

    // Simulate variable typing speed
    setTimeout(typeCode, Math.random() * 23 + 10);
  } else {
    // After finishing typing the current snippet, wait a while before starting a new one
    setTimeout(() => {
      document.getElementById("codeOutput").textContent = "";
      currentSnippet = getRandomSnippet();
      characterIndex = 0;
      typeCode();
    }, 4000);
  }
}

document.addEventListener("DOMContentLoaded", typeCode);
