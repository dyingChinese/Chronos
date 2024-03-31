class ResourceUtils {
  public static CLASSPATH_URL_PREFIX: string = "classpath:";
  public static FILE_URL_PREFIX: string = "file:";
  public static JAR_URL_PREFIX: string = "jar:";
  public static WAR_URL_PREFIX: string = "war:";
  public static URL_PROTOCOL_FILE: string = "file";
  public static URL_PROTOCOL_JAR: string = "jar";
  public static URL_PROTOCOL_WAR: string = "war";
  public static URL_PROTOCOL_ZIP: string = "zip";
  public static URL_PROTOCOL_WSJAR: string = "wsjar";
  public static URL_PROTOCOL_VFSZIP: string = "vfszip";
  public static URL_PROTOCOL_VFSFILE: string = "vfsfile";
  public static URL_PROTOCOL_VFS: string = "vfs";
  public static JAR_FILE_EXTENSION: string = ".jar";
  public static JAR_URL_SEPARATOR: string = "!/";
  public static WAR_URL_SEPARATOR: string = "*/";
}

export default ResourceUtils;
