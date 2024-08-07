import { getReleases } from "./getReleases";

interface GitHubAsset {
  download_count: number;
}

interface GitHubRelease {
  assets: GitHubAsset[];
}

export async function getGitHubDownloads(): Promise<number> {
  const releases: GitHubRelease[] = await getReleases();
  const downloads = releases.reduce(
    (acc: number, release: GitHubRelease) =>
      acc + release.assets.reduce(
        (sum: number, asset: GitHubAsset) => sum + asset.download_count,
        0
      ),
    0
  );
  return downloads;
}
