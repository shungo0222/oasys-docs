const sidebars = {
  techdocs: [
    {
      type: 'category',
      label: 'Technical Materials', 
      link: {
        type: 'doc',
        id: 'techdocs/technical-materials/lv1-technical-materials/1-1-technical-materials',
      },
      collapsed: false,
      items: [
        'techdocs/technical-materials/lv1-technical-materials/lv2-technical-materials/2-1-about-oasys',
      ],
    }, 
    {
      type: 'category',
      label: 'Technology',
      link: {
        type: 'generated-index',
      },
      items: [
        {  
          type: 'category',
          label: 'Hub-Layer',
          link: {
            type: 'doc',
            id: 'techdocs/technologies/lv1-hub-layer/1-1-hub-layer',
          },
          items: [
            'techdocs/technologies/lv1-hub-layer/lv2-hub-layer/2-1-geth-wallet',
            'techdocs/technologies/lv1-hub-layer/lv2-hub-layer/2-2-block-confirmation',
            'techdocs/technologies/lv1-hub-layer/lv2-hub-layer/2-3-proof-of-stake',
            'techdocs/technologies/lv1-hub-layer/lv2-hub-layer/2-4-version-info',
          ],
        },
        {
          type: 'category',
          label: 'Verse-Layer, with Incredibly High UX',
          link: {
            type: 'doc',
            id: 'techdocs/technologies/lv1-verse-layer/1-1-verse-layer',
          },
          items: [
            'techdocs/technologies/lv1-verse-layer/lv2-verse-layer/2-1-wallet',
            'techdocs/technologies/lv1-verse-layer/lv2-verse-layer/2-2-verifier',
          ],
        },
        {  
          type: 'category',
          label: 'NFT Bridge',
          link: {
            type: 'generated-index',
          },
          items: [
            'techdocs/technologies/lv1-nft-bridge/1-1-nft-bridge',
            'techdocs/technologies/lv1-nft-bridge/1-2-vnft-onft-bridge',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Validator',
      link: {
        type: 'generated-index',
      },
      items: [
          'techdocs/validator/lv1-hardware-requirements/1-1-hardware-requirements',
          'techdocs/validator/lv1-hub-layer-node-build/1-1-hub-layer-node-build',
          'techdocs/validator/lv1-hub-layer-client-join/1-1-hub-layer-client-join',
          'techdocs/validator/lv1-hub-layer-client-command/1-1-hub-layer-client-command',
          'techdocs/validator/lv1-verse-layer-node-build-optimism/1-1-verse-layer-node-build-optimism',
          'techdocs/validator/lv1-faq/1-1-faq',
      ],
    },
    {
      type: 'category',
      label: 'Wallet',
      link: {
        type: 'generated-index',
      },
      items: [
        'techdocs/wallet/lv1-about/1-1-about',
        'techdocs/wallet/lv1-about-validator-account/1-1-about-validator-account',
        'techdocs/wallet/lv1-wallet-commands/1-1-wallet-commands',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      link: {
        type: 'generated-index',
      },
      items: [
        'techdocs/tools/lv1-tools/1-1-explorer',
        'techdocs/tools/lv1-tools/1-2-faucets',
        'techdocs/tools/lv1-tools/1-3-oracles',  
      ],
    },
    {
      type: 'category',
      label: 'Smart Contract',
      link: {
        type: 'generated-index',
      },
      items: [
        'techdocs/smart-contract/1-1-smart-contract',
        'techdocs/smart-contract/1-2-erc20-erc721-factory-use-case',
        'techdocs/smart-contract/1-3-game-example',
      ]
    },
    {
      type: 'category',
      label: 'Commands',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Hub-Layer',
          link: {
            type: 'generated-index',
          },
          items: [
            'techdocs/commands/lv1-hub-layer/1-1-hub-layer-geth',
          ],
        },
        {
          type: 'category',
          label: 'Verse-Layer',
          link: {
            type: 'generated-index',
          },
          items: [
            'techdocs/commands/lv1-verse-layer/1-1-verse-layer-geth',
          ],
        },
        'techdocs/commands/lv1-http-server/1-1-http-server',
        'techdocs/commands/lv1-websocket/1-1-websocket',
        'techdocs/commands/lv1-ipc-server/1-1-ipc-server',
        'techdocs/commands/lv1-graphql/1-1-graphql',
      ],
    },
  ],
  whitepaper: [
    {
      type: 'autogenerated',
      dirName: 'whitepaper',
    },
  ],
};
module.exports = sidebars;