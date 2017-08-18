CREATE TABLE [dbo].[Employees]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [FirstName] NVARCHAR(50) NULL, 
    [LastName] NVARCHAR(50) NULL, 
    [Gender] NCHAR(10) NULL, 
    [Title] NVARCHAR(50) NULL, 
    [Address] NVARCHAR(250) NULL
)

