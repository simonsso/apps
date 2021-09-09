// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringJson$Meta } from '@polkadot/ui-keyring/types';

import React from 'react';

import { AddressMini } from '@polkadot/react-components';

import { useTranslation } from '../translate';

interface Props {
  isMultisig: boolean;
  meta?: KeyringJson$Meta;
}

function Multisig ({ isMultisig, meta }: Props): React.ReactElement<Props> | null {
  const { t } = useTranslation();

  if (!isMultisig || !meta) {
    return null;
  }

  const { threshold, who } = meta;

  return (
    <section className='ui--Multisig withDivider'>
      <div className='ui--AddressMenu-sectionHeader'>
        {t<string>('multisig')}  <span className='threshold'>{threshold}/{(who as string[]).length}</span>
      </div>
      {(who as string[])?.map((address) => (
        <AddressMini
          key={address}
          value={address}
        />
      ))}
    </section>
  );
}

export default React.memo(Multisig);
