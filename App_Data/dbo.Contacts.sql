CREATE TABLE [dbo].[Contacts] (
    [id]         INT            IDENTITY (1, 1) NOT NULL,
    [company]    NVARCHAR (100) NOT NULL,
    [firstName]  NVARCHAR (100) NOT NULL,
    [lastName]   NVARCHAR (100) NOT NULL,
    [email]      NVARCHAR (100) NOT NULL,
    [phone]      NVARCHAR (100) NOT NULL,
    [address1]   NVARCHAR (100) NOT NULL,
    [address2]   NVARCHAR (100) NULL,
    [city]       NVARCHAR (100) NOT NULL,
    [state]      NVARCHAR (100) NOT NULL,
    [postalCode] NVARCHAR (50)  NOT NULL,
    PRIMARY KEY CLUSTERED ([id] ASC)
);

