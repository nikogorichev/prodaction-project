import { Project } from "ts-morph";

const project = new Project({});

//добавляем все файлы, в которых мы будем работать
project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

// получаем все файлы (ts и tsx)
const files = project.getSourceFiles();

function isAbsolute(value: string) {
  const layers = ["app", "shared", "entities", "features", "widgets", "pages"];
  return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }
    // console.log(value);
  });
});

project.save();
