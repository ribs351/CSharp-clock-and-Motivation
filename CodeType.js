const codeData = 
{
    CodeToType: 
    [
        {
            code1: `public class Perseverance
{
    public static void Main()
    {
        int attempts = 0;
        while (true)
        {
            attempts++;
            Console.WriteLine($"Attempt #{attempts}");
            
            if (BreakthroughAchieved())
            {
                Console.WriteLine("Success! Every failure was a lesson.");
                break;
            }
            else
            {
                Console.WriteLine("Temporary setback. Keep going!");
                Thread.Sleep(1000); // Pause to reflect
            }
        }
    }

    private static bool BreakthroughAchieved()
    {
        return new Random().Next(0, 10) == 9; // 10% chance
    }
}`,

            code2: `public class Progress
{
    public static void Grow(int currentLevel)
    {
        int targetLevel = 100;
        
        for (int i = currentLevel; i <= targetLevel; i++)
        {
            Console.WriteLine($"Level {i}: Still growing...");
            
            if (i % 10 == 0)
            {
                Console.WriteLine("Milestone reached! Celebrate small wins.");
            }
            
            Thread.Sleep(500); // Growth takes time
        }
        
        Console.WriteLine("Mastery achieved through consistent effort!");
    }
}`,

            code3: `public class Wisdom
{
    public static void Accumulate(List<string> lessons, int depth = 0)
    {
        string indent = new string(' ', depth * 2);
        
        if (!lessons.Any())
        {
            Console.WriteLine(indent + "All lessons learned.");
            return;
        }
        
        string currentLesson = lessons.First();
        Console.WriteLine(indent + $"Learning: {currentLesson}");
        Thread.Sleep(1000);
        
        Accumulate(lessons.Skip(1).ToList(), depth + 1);
        Console.WriteLine(indent + $"Mastered: {currentLesson}");
    }
}`,

            code4: `public class Resilience
{
    public static void Recover(int setbacks)
    {
        try
        {
            Console.WriteLine("Trying new approach...");
            if (new Random().NextDouble() > 0.3)
                throw new Exception("Unexpected challenge");
                
            Console.WriteLine("Adaptation successful!");
        }
        catch
        {
            Console.WriteLine($"Overcoming setback #{setbacks}");
            Recover(setbacks + 1);
        }
    }
}`,

            code5: `public class Innovation
{
    public static void Iterate(List<string> ideas)
    {
        Console.WriteLine("Current ideas:");
        ideas.ForEach(i => Console.WriteLine($"- {i}"));
        
        while (ideas.Count > 1)
        {
            string newIdea = CombineIdeas(ideas[0], ideas[1]);
            Console.WriteLine($"Combined: {newIdea}");
            ideas.RemoveRange(0, 2);
            ideas.Add(newIdea);
            Thread.Sleep(1500);
        }
        
        Console.WriteLine($"Final breakthrough: {ideas.First()}");
    }

    private static string CombineIdeas(string a, string b) => $"{a} + {b}";
}`,

            code6: `public class Discipline
{
    private static readonly List<string> DailyHabits = new() 
    { 
        "Morning planning", 
        "Deep work session", 
        "Skill practice",
        "Health routine",
        "Evening reflection"
    };

    public static void MaintainRoutine(int day)
    {
        Console.WriteLine($"Day {day} routine:");
        DailyHabits.ForEach(habit => 
        {
            Console.WriteLine($"✔ {habit}");
            Thread.Sleep(800);
        });
        
        if (day < 21) // Forming a habit
            MaintainRoutine(day + 1);
        else
            Console.WriteLine("Habits are now second nature!");
    }
}`,

            code7: `public class Creativity
{
    public static void Brainstorm(int ideasNeeded, List<string> currentIdeas = null)
    {
        currentIdeas ??= new List<string>();
        
        if (currentIdeas.Count >= ideasNeeded)
        {
            Console.WriteLine("Top ideas:");
            currentIdeas.OrderByDescending(i => i.Length)
                       .Take(3)
                       .ToList()
                       .ForEach(i => Console.WriteLine($"🌟 {i}"));
            return;
        }
        
        string newIdea = GenerateIdea();
        Console.WriteLine($"Idea #{currentIdeas.Count + 1}: {newIdea}");
        currentIdeas.Add(newIdea);
        
        Thread.Sleep(1200);
        Brainstorm(ideasNeeded, currentIdeas);
    }

    private static string GenerateIdea()
    {
        string[] parts = { "AI", "quantum", "sustainable", "VR", "neural", "bio-inspired" };
        string[] domains = { "finance", "education", "healthcare", "energy", "transportation" };
        return $"{parts[new Random().Next(parts.Length)]} {domains[new Random().Next(domains.Length)]} solution";
    }
}`,

            code8: `public class Collaboration
{
    public static void PairProgram(string problem, int hours = 0)
    {
        string[] steps = {
            "Analyzing requirements",
            "Writing tests",
            "Implementing solution",
            "Refactoring code",
            "Documenting results"
        };
        
        if (hours >= steps.Length)
        {
            Console.WriteLine($"\nProblem solved in {hours} hours of teamwork!");
            return;
        }
        
        Console.WriteLine($"{steps[hours]}...");
        Thread.Sleep(1500);
        PairProgram(problem, hours + 1);
    }
}`,

            code9: `public class Leadership
{
    public static void Mentor(List<string> team, int sessions = 1)
    {
        Console.WriteLine($"Mentoring session #{sessions}");
        
        for (int i = 0; i < team.Count; i++)
        {
            Console.WriteLine($"Helping {team[i]} grow...");
            team[i] = $"{team[i]} v{sessions + 1}";
            Thread.Sleep(1000);
        }
        
        if (sessions < 3)
            Mentor(team, sessions + 1);
        else
            Console.WriteLine("Team has reached new potential!");
    }
}`,

            code10: `public class Legacy
{
    public static void Build(int generation, Action<int> continuation = null)
    {
        continuation ??= (gen) => Console.WriteLine($"Generation {gen} secured the future");
        
        Console.WriteLine($"Generation {generation} building...");
        Thread.Sleep(2000);
        
        if (generation > 0)
        {
            Build(generation - 1, continuation);
        }
        else
        {
            continuation(generation);
        }
    }
}`
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
