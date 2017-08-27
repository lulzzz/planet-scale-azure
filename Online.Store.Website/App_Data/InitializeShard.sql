-- Reference table that contains the same data on all shards
-- Sharded table that has a foreign key column containing our sharding key (OrderID)
IF OBJECT_ID('Orders', 'U') IS NULL 
    CREATE TABLE [Orders](
        [OrderID] [bigint] NOT NULL,
		[UserID] [uniqueidentifier] NULL,
		[ProductID] [nvarchar](50) NULL,
		[ProductName] [nvarchar](200) NOT NULL,
		[ProductPrice] [smallmoney] NOT NULL,
		[Qty] [int] NULL,
		[Orderdate] [datetime] NULL,
		[UserName] [nvarchar](200) NOT NULL
     CONSTRAINT [PK_Orders_CustomerId_OrderId] PRIMARY KEY CLUSTERED (
        [OrderID] ASC
     )
    ) 
GO
