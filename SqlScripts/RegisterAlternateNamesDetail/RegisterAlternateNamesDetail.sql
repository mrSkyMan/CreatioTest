DECLARE 
    -- Название схемы представления создаваемой миникарточки.
    @ClientUnitSchemaName NVARCHAR(100) = 'ITSAlternateNamesDetail',
    -- Название схемы объекта, к которому привязывается миникарточка.
    @EntitySchemaName NVARCHAR(100) = 'ITSAlternateNames',
    -- Название детали.
    @DetailCaption NVARCHAR(100) = 'Альтернативні назви'

INSERT INTO SysDetail(Caption, DetailSchemaUId, EntitySchemaUId)
VALUES(@DetailCaption,
     (SELECT TOP 1 UId
      from SysSchema
      WHERE Name = @ClientUnitSchemaName),
      (SELECT TOP 1 UId
      from SysSchema
      WHERE Name = @EntitySchemaName))