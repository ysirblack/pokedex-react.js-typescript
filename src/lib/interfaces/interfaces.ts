type Type = {
  type: {
    name: string;
  };
};
type BaseStat = {
  base_stat: string;
};
export interface IPokemon {
  status: string;
  isLoading: boolean;
  data: {
    data: {
      name: string;
      types: Array<Type>;
      id: number;
      stats: Array<BaseStat>;
      sprites: {
        front_default: string;
      };
    };
  };
}

export interface PokeContextType {
  pokename: string;
  firstClicked: boolean;
  response: IPokemon;
  stats: IPokemon;
  fetchPokemons: () => void;
  fetchPokemonName: (name: string) => void;
  setName: (name: string) => void;
  setClick: () => void;
}

export interface PokemonItemProps {
  name: string;
  number: number;
}

interface Names {
  name: string;
}

export interface PokemonListProps {
  names: Array<Names>;
}

export interface NavbarProps {
  title: string;
}

export interface IQuery {
  isLoading: boolean;
  data: {
    data: {
      count: number;
      results: Array<Names>;
    };
  };
  isError: boolean;
  error: Error;
}
