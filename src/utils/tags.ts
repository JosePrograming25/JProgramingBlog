export function getAllTags(posts: any[]) {
  const allTags = posts.flatMap((post) => post.frontmatter.tags || []);
  const tagCounts = allTags.reduce((acc: Record<string, number>, tag: string) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count: Number(count) })) // Ensure count is a number
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(posts: any[], tag: string) {
  return posts.filter((post) =>
    (post.frontmatter.tags || []).includes(tag)
  );
}
