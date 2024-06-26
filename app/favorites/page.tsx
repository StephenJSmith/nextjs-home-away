import EmptyList from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";
import { fetchFavorites } from "@/utils/actions";

const FavoritesPage = async () => {
  const favorites = await fetchFavorites();
  if (!(await favorites).length) {
    return <EmptyList />;
  }

  return <PropertiesList properties={favorites} />;
};

export default FavoritesPage;
