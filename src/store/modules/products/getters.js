export default {
    productsList: state => state.products,
    productsErrors: state => state.errors.products,
    productsMessages: state => state.messages.products,
    recipesList: state => state.recipes,
    recipesErrors: state => state.errors.recipes,
    recipesMessages: state => state.messages.recipes,
    availableRecipesList: state => state.availableRecipes,
}