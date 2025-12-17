import { ContentType } from "@/types/frontmatter";
import { promises, readFileSync } from "fs";
import { bundleMDX } from "mdx-bundler";
import { join } from "path";

export async function getFileSlugArray(type: ContentType) {
  return getFileList(join(process.cwd(), "src", "contents", type)).then(
    (paths) =>
      paths.map((path) =>
        path
          .replace(join(process.cwd(), "src", "contents", type) + "/", "")
          .replace(".mdx", "")
          .split("/")
      )
  );
}

export async function getFileBySlug(
  source: string,
  slug: string
): Promise<{ code: string }> {
  const { code, frontmatter } = await bundleMDX({
    source,
  });

  return {
    code,
  };
}

async function getFileList(dirName: string) {
  let files: string[] = [];
  const items = await promises.readdir(dirName, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      files = [...files, ...(await getFileList(`${dirName}/${item.name}`))];
    } else {
      files.push(`${dirName}/${item.name}`);
    }
  }
  return files;
}

export function preFetch({ type }: { type: ContentType }) {
  if (type === "services") {
    const sewagetreatement = readFileSync(
      join(
        process.cwd(),
        "public",
        "contents",
        type,
        "sewage-treatment-solutions.mdx"
      ),
      "utf8"
    );
    const envconsult = readFileSync(
      join(
        process.cwd(),
        "public",
        "contents",
        type,
        "environmental-consultancy.mdx"
      ),
      "utf8"
    );

    const treatplant = readFileSync(
      join(
        process.cwd(),
        "public",
        "contents",
        type,
        "effluent-treatment-plant.mdx"
      ),
      "utf8"
    );
    const mbbrtech = readFileSync(
      join(
        process.cwd(),
        "public",
        "contents",
        type,
        "mbbr-technology.mdx"
      ),
      "utf8"
    );
    const mbrtech = readFileSync(
      join(
        process.cwd(),
        "public",
        "contents",
        type,
        "mbr-technology.mdx"
      ),
      "utf8"
    );
    const sbrtech = readFileSync(
      join(
        process.cwd(),
        "public",
        "contents",
        type,
        "sbr-technology.mdx"
      ),
      "utf8"
    );
    const stpetptech = readFileSync(
      join(
        process.cwd(),
        "public",
        "contents",
        type,
        "stp-etp-technology.mdx"
      ),
      "utf8"
    );

    const services = [
      {
        slug: "sewage-treatment-solutions",
        source: sewagetreatement,
      },
      {
        slug: "environmental-consultancy",
        source: envconsult,
      },
      {
        slug: "effluent-treatment-plant",
        source: treatplant,
      },
      {
        slug: "mbbr-technology",
        source: mbbrtech,
      },
      {
        slug: "mbr-technology",
        source: mbrtech,
      },
      {
        slug: "sbr-technology",
        source: sbrtech,
      },
      {
        slug: "stp-etp-technology",
        source: stpetptech,
      },
    ];

    return services;
  } else if (type === "projects") {
    const humantd = readFileSync(
      join(process.cwd(), "public", "contents", type, "humantd.mdx"),
      "utf8"
    );
    const medbud = readFileSync(
      join(process.cwd(), "public", "contents", type, "medbud.mdx"),
      "utf8"
    );
    const echoes = readFileSync(
      join(process.cwd(), "public", "contents", type, "echoes.mdx"),
      "utf8"
    );
    const social = readFileSync(
      join(
        process.cwd(),
        "public",
        "contents",
        type,
        "social-media-backend.mdx"
      ),
      "utf8"
    );
    const projects = [
      { slug: "humantd", source: humantd },
      { slug: "medbud", source: medbud },
      { slug: "echoes", source: echoes },
      { slug: "social-media-backend", source: social },
    ];

    return projects;
  }
}
