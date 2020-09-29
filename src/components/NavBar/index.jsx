import React from 'react';

import { DropdownOption, DropdownProvider,DropdownRoot } from '../Dropdown';
import { Company, Developers, Products } from '../Content'

import { Container, DropdownStyles } from './styles';

function NavBar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption 
                name='Produtos'
                content={Products}
                backgroundHeight={268}
              />
            </li>
            
            <li>
              <DropdownOption 
                name='Desenvolvedores'
                content={Developers}
                backgroundHeight={167}
              />
            </li>

            <li>
              <DropdownOption 
                name='Empresas'
                content={Company}
                backgroundHeight={215}
              />
            </li>
          </ul>
        </Container>

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default NavBar;