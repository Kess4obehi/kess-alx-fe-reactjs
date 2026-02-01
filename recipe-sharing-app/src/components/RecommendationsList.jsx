import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) =>
    state.recipes.filter(
      (recipe) => !state.favorites.includes(recipe.id)
    )
  );

  if (recommendations.length === 0) {
    return <p>No recommendations available</p>;
  }

  return (
    <div>
      <h2>Recommended Recipes</h2>

      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
