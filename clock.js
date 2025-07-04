const clockClassDefinition = `
public class Clock
{
    public int Hour { get; set; }
    public int Minute { get; set; }
    public int Second { get; set; }
    public int Day { get; set; }
    public string Month { get; set; }
    public int Year { get; set; }
}`;

function updateClock() {
  const now = new Date();
  const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const day = now.getDate();
    const month = now.toLocaleString("default", { month: "long" });
    const year = now.getFullYear();

    const csharpCode = `
public void Main()
{
    var clock = new Clock
    {
        Hour = ${hour},
        Minute = ${minute.toString().padStart(2, "0")},
        Second = ${second.toString().padStart(2, "0")},
        Day = ${day},
        Month = "${month}",
        Year = ${year}
    };
}`;

const fullCode = clockClassDefinition + '\n' + csharpCode;

  // Apply Prism highlighting
  const highlightedCode = Prism.highlight(
    fullCode,
    Prism.languages.csharp,
    "csharp"
  );

  // Wrap in <pre><code> for proper Prism styling
  document.getElementById("clockDisplay").innerHTML = `
    <pre><code>${highlightedCode}</code></pre>
  `;
}

// Initialize clock immediately and update every second
updateClock();
setInterval(updateClock, 1000);