import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";

export default function ConnectButton() {
  const {activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const connectWallet = () => {
      activateBrowserWallet();
  }
console.log('account',account);
console.log('balance', etherBalance);
  return account ? (
    <Box>
      <Text color="white" fontSize="md">
        {etherBalance && etherBalance._hex} ETH
      </Text>
    </Box>
  ) : (
    <Button onClick={connectWallet}>Connect to a wallet</Button>
  );
}