const fs = require('fs');
const path = require('path');

export class JsonParser {

  public static getJsonFromFile(fileName: string) {
    return this.getConfig(fileName);
  }

  private static getConfig(fileName: string) {
    const filepath = path.join(__dirname, fileName);
    return this.readJsonFileSync(filepath);
  }

  private static readJsonFileSync(filepath: string, encoding?: string) {
    if (typeof (encoding) === 'undefined') {
      encoding = 'utf8';
    }
    const file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
  }

  public static writeJsonToFile(outputFilename: string, data: any, encoding?: string) {
    const filepath = __dirname + outputFilename;
    if (typeof (encoding) === 'undefined') {
      encoding = 'utf8';
    }
    const out = fs.writeFile(filepath, data, encoding);
    return out;

  }
}
