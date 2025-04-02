const { spawn } = require("child_process");

// Atualize para usar o comando correto definido no package.json do backend
const projects = [
  { name: "backend", cmd: "start:dev" },
  { name: "frontend", cmd: "dev" }
];

function detectPkgManager() {
  const execpath = process.env.npm_execpath || "";
  if (execpath.includes("pnpm")) return "pnpm";
  if (execpath.includes("yarn")) return "yarn";
  return "npm";
}

const pkgManager = detectPkgManager();

projects.forEach(({ name, cmd }) => {
  console.log(`Executando "${pkgManager} run ${cmd}" na pasta "${name}"`);
  const proc = spawn(pkgManager, ["run", cmd], {
    cwd: name,
    stdio: "inherit",
    shell: true
  });
  proc.on("error", (err) => {
    console.error(`Erro ao rodar "${cmd}" em ${name}:`, err);
  });
  proc.on("exit", (code) => {
    console.log(`${name} terminou com o código ${code}`);
  });
});
