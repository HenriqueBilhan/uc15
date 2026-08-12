import { FlatList } from 'react-native';
import CardProdutos from './CardProdutos';

const produtos = [
  {
    id: 1,
    nome: 'Notebook',
    preco: 3500,
    imagem: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell/dell-15-intel-3530/media-gallery/laptop-dell-dc15250nt-bk-plastic-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=627&qlt=100,1&resMode=sharp2&size=627,402&chrss=full',
  },
  {
    id: 2,
    nome: 'Celular',
    preco: 2000,
    imagem: '',
  },
  {
    id: 3,
    nome: 'Televisão',
    preco: 2500,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRPNWkrIur42pNFjAMBeReuJ6O6WAyFGX6RQjgsAfPg&s=10',
  },
];

export default function ListaProdutos() {
  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CardProdutos
          id={item.id}
          nome={item.nome}
          preco={item.preco}
          imagem={item.imagem}
        />
      )}
    />
  );
}