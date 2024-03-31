import fs from "fs";
import path from "path";

import packageJson from "^/package.json";

abstract class ResourceLoader {
  abstract getResource(location: String): any;

  abstract IsVaildFile(location: String): boolean;
}

class JSONResourceLoader extends ResourceLoader {
  public IsVaildFile(location: string): boolean {
    const ext = path.extname(location);
    if (ext !== ".json") return false;
    return true;
  }

  public async getResource(location: string) {
    if (!this.IsVaildFile(location)) {
      throw new Error(`${location} must be a JSON file`);
    }
    try {
      const _file = await import(path.resolve(location));
      return JSON.parse(_file);
    } catch (err) {
      throw new Error("File is not valid JSON");
    }
  }
}

class XMLResourceLoader extends ResourceLoader {
  public IsVaildFile(location: string): boolean {
    const ext = path.extname(location);
    if (ext !== ".xml") return false;
    return true;
  }

  public getResource(location: string) {
    if (!this.IsVaildFile(location)) {
      throw new Error(`${location} must be a XML file`);
    }
    try {
      const _file = fs.readFileSync(
        path.resolve(location),
        packageJson.projectSourceEncoding
      );
      return new DOMParser().parseFromString(_file.toString(), "text/xml");
    } catch (err) {
      throw new Error("File is not valid XML");
    }
  }
}

class HTMLResourceLoader extends ResourceLoader {
  public IsVaildFile(location: string): boolean {
    const ext = path.extname(location);
    if (ext !== ".html") return false;
    return true;
  }

  public getResource(location: string) {
    if (!this.IsVaildFile(location)) {
      throw new Error(`${location} must be a html file`);
    }
    try {
      const _file = fs.readFileSync(
        path.resolve(location),
        packageJson.projectSourceEncoding
      );
      return new DOMParser().parseFromString(_file.toString(), "text/html");
    } catch (err) {
      throw new Error("File is not valid html");
    }
  }
}

export default {
  ResourceLoader,
  JSONResourceLoader,
  XMLResourceLoader,
  HTMLResourceLoader,
};
