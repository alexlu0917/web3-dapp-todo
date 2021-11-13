import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";

export default function ConnectButton() {
  const {activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
console.log('account',account);
console.log('balance', etherBalance);
  return account ? (
    <Box>
      <Text color="white" fontSize="md">
        {etherBalance && etherBalance._hex} ETH
      </Text>
    </Box>
  ) : (
    <Button>Connect to a wallet</Button>
  );
}