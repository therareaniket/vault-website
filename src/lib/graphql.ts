export async function fetchGraphQL<T, V extends Record<string, unknown> = Record<string, never>>(
    query: string,
    variables: V = {} as V
  ): Promise<T> {
    const response = await fetch(process.env.DHATU_VAULT_GRAPHQL_API as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: 10 },
    });
  
    const json = await response.json();
  
    if (json.errors) {
      console.error("GraphQL Errors:", json.errors);
      throw new Error("Failed to fetch GraphQL data.");
    }
  
    return json.data;
  }