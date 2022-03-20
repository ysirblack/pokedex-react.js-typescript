import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { PokedexProvider } from "./context/pokedex/PokedexContext";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'

// const queryClient = new QueryClient(); //this method without options will not be persisted.

const queryClient = new QueryClient({ //persistent cache, when page is reloaded, it will be still persisted
   defaultOptions: {
     queries: {
       cacheTime: 1000 * 60 * 60 * 24, // 24 hours
     },
   },
 })


function App() {

  const localStoragePersistor = createWebStoragePersistor({storage: window.localStorage})//neccessary for persistance
 
  persistQueryClient({//neccessary for persistance
    queryClient,
    persistor: localStoragePersistor,
  })

  return (
    <QueryClientProvider client={queryClient}> 
      <PokedexProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/pokemon/:pokename" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </PokedexProvider>
    </QueryClientProvider>
  );
}

export default App;
