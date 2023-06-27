// @ts-nocheck
'use client';

// import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
// import gql from 'graphql-tag';
// import debounce from 'lodash.debounce';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './styles/dropDown.scss';

// const SEARCH_PRODUCTS_QUERY = gql`
//   query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
//     searchTerms: products(
//       where: {
//         OR: [
//           { name: { contains: $searchTerm } }
//           { description: { contains: $searchTerm } }
//         ]
//       }
//     ) {
//       id
//       name
//       photo {
//         picture {
//           url
//         }
//       }
//     }
//   }
// `;

export default function Search() {
  const router = useRouter();
  // const [findItems, { loading, data, error }] = useLazyQuery(
  //   SEARCH_PRODUCTS_QUERY,
  //   {
  //     fetchPolicy: 'no-cache',
  //   }
  // );
  
  const items = []; // drop this line later
  const loading = false; // drop this line later
  // const items = data?.searchTerms || [];
  // const findItemsButChill = debounce(findItems, 350);
  resetIdCounter();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange() {
      // findItemsButChill({
      //   variables: {
      //     searchTerm: inputValue,
      //   },
      // });
    },
    onSelectedItemChange({ selectedItem }) {
      // router.push( `/product/${selectedItem.id}`);
    },
    itemToString: (item) => item?.name || '',
  });
  
  return (
    <div className='searchStyles'>
      <div>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Search for an Item',
            id: 'search',
            className: loading ? 'loading' : null,
          })}
        />
      </div> 
      <div className='dropDown' {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <div
              {...getItemProps({ item })}
              key={item.id}
              highlighted={index === highlightedIndex}
              className='dropDownItem'
            >
              <Image
                src={item.photo.picture.url}
                alt={item.name}
                width={50}
                height={50}
              />
              {item.name}
            </div>
          ))}
        {isOpen && !items.length && !loading && (
          <div className='dropDownItem'>Sorry, No items found for {inputValue}</div>
        )}
      </div>
    </div> 
  );
}