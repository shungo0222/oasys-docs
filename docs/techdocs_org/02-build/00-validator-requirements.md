---
sidebar_position: 1
sidebar_label: Validator Requirements
id: requirements
---

# Hardware Requirements

## Intro

Blockchain it self stores data onto decentralized storage. Syncing block, Sharing block it self makes stable usage for blockchain network. Since producing more block needs storage, if system elapsed time, and stacked lots of block, you may have to increase disk storage for stable node operations on future.

## Hub-Layer Hardware Requirements

### Minimum Requrement

|         |                                   |
|---------|-----------------------------------|
| OS      | Linux                             |
| CPU     | 2 Core / 1.8GHz / x86_64 or ARM   |
| RAM     | 8GB                               |
| DISK    | 500GB SSD                         |
| Network | 100Mbps                           |

### Recommended Environment

|         |                                   |
|---------|-----------------------------------|
| OS      | Linux                             |
| CPU     | 4 Core / 1.8GHz / x86_64 or ARM   |
| RAM     | 16GB                              |
| DISK    | 500GB SSD                         |
| Network | 100Mbps                           |

**10,000,000 OAS is required to validate the Hub-Layer node.** 

## Verse-Layer Hardware Requirements

### Recommended Environment
|         |                            |
|---------|----------------------------|
| OS      | Linux                      |
| CPU     | 4 Core / 2.5GHz / x86_64   |
| RAM     | 8GB DISK                   |
| DISK    | 500GB SSD                  |
| Network | 100Mbps                    |

Verse uses more CPU. Using Higher Frequency for CPU when having much pending transaction in Verse can have a higher verse transaction processing speed for Verse. 

**1,000,000 OAS is required to validate the Verse-Layer node.**

## Firewall Settings
- TCP/UDP port 30303 allowed (for P2P between nodes)
- TCP port 8545 allowed (for RPC)