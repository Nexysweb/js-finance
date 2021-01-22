import React from "react";
import * as SwissBanks from "@nexys/swiss-banks";

export default () => {
  const [iban, setIban] = React.useState<string>("");
  const [bic, setBic] = React.useState<string | undefined>(undefined);

  const onSubmit = (e: any) => {
    e.preventDefault();

    setBic(SwissBanks.ibanToBic(iban));
  };

  const renderPrimes = () => {
    if (!bic) {
      return null;
    }

    return <code>{JSON.stringify(bic)}</code>;
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={(v) => setIban(v.target.value)} placeholder="iban" />
        <button type="submit" onClick={onSubmit}>
          Get BIC
        </button>
      </form>
      {renderPrimes()}
    </>
  );
};
